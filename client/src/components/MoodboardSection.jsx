import { useRef, useState, useEffect } from 'react';

// Builds a randomly placed sticker label for the board
function createStickerText(sticker) {
  return {
    id: Date.now(),
    text: `${sticker.icon} ${sticker.label.split(' ')[1] || ''}`,
    font: 'Alex Brush',
    color: '#FFFDF9',
    x: 120 + Math.random() * 400,
    y: 120 + Math.random() * 250,
    rotation: (Math.random() - 0.5) * 24
  };
}

export default function MoodboardSection() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#F7F3EC'); // Default Creme brush
  const [brushSize, setBrushSize] = useState(6);
  const [activeTool, setActiveTool] = useState('brush'); // 'brush' or 'eraser'
  
  // Custom text stamping state
  const [textInput, setTextInput] = useState('');
  const [selectedFont, setSelectedFont] = useState('Alex Brush');
  const [placedTexts, setPlacedTexts] = useState([]);
  
  // Custom image/sticker stamping state
  const [placedImages, setPlacedImages] = useState([
    { id: 1, src: '/images/58509.jpg', x: 60, y: 80, rotation: -6, width: 140, label: 'Golden Hour' },
    { id: 2, src: '/images/58513.jpg', x: 580, y: 120, rotation: 8, width: 130, label: '35mm' }
  ]);

  const colorPalette = [
    { name: 'Creme', hex: '#F7F3EC' },
    { name: 'Soft Blush', hex: '#F7EBEB' },
    { name: 'Warm Gold', hex: '#D4AF37' },
    { name: 'Rose Pink', hex: '#E8B4B8' },
    { name: 'Pure White', hex: '#FFFFFF' },
    { name: 'Charcoal', hex: '#2B2320' }
  ];

  const presetStickers = [
    { label: '🍵 Matcha Latte', icon: '🍵' },
    { label: '📷 35mm Camera', icon: '📷' },
    { label: '🕯️ Candle Vibe', icon: '🕯️' },
    { label: '✨ Golden Star', icon: '✨' },
    { label: '🌅 Sunset View', icon: '🌅' },
    { label: '🍷 Wine Aesthetic', icon: '🍷' }
  ];

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const ctx = canvas.getContext('2d');
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  }, []);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(canvas, 0, 0);

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(tempCanvas, 0, 0);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Drawing Handlers
  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    const ctx = canvas.getContext('2d');
    if (activeTool === 'eraser') {
      ctx.clearRect(x - brushSize * 2, y - brushSize * 2, brushSize * 4, brushSize * 4);
    } else {
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setPlacedTexts([]);
  };

  // Text Stamping Handler
  const handleAddText = (e) => {
    e.preventDefault();
    if (!textInput.trim()) return;
    const newText = {
      id: Date.now(),
      text: textInput,
      font: selectedFont,
      color: brushColor,
      x: 150 + Math.random() * 200,
      y: 150 + Math.random() * 150,
      rotation: (Math.random() - 0.5) * 16
    };
    setPlacedTexts([...placedTexts, newText]);
    setTextInput('');
  };

  // Image Upload Handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImg = {
          id: Date.now(),
          src: event.target.result,
          x: 100 + Math.random() * 300,
          y: 100 + Math.random() * 200,
          rotation: (Math.random() - 0.5) * 20,
          width: 140,
          label: 'Uploaded Photo'
        };
        setPlacedImages([...placedImages, newImg]);
      };
      reader.readAsDataURL(file);
    }
  };

  // Preset Sticker Stamping
  const handleAddSticker = (sticker) => {
    setPlacedTexts([...placedTexts, createStickerText(sticker)]);
  };

  return (
    <section 
      id="moodboard" 
      className="section-padding bg-wine-checks"
      style={{
        position: 'relative',
        minHeight: '100vh',
        color: '#FFFDF9',
        borderTop: '2px solid rgba(247, 243, 236, 0.3)',
        borderBottom: '2px solid rgba(247, 243, 236, 0.3)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge-wine" style={{ backgroundColor: '#FAF7F2', color: '#7A0000' }}>
            ✦ Interactive Creative Canvas ✦
          </span>
          <h2 style={{ fontFamily: 'var(--font-script)', fontSize: '4.5rem', color: '#F7F3EC', fontWeight: 400, marginTop: '0.2rem', textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
            Adhya's Interactive Moodboard
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#F7EBEB', fontSize: '1.15rem', maxWidth: '600px', margin: '0.4rem auto 0 auto' }}>
            Pick a color & brush to doodle, add custom text in different fonts, or upload your own photos to pin onto the board!
          </p>
        </div>

        {/* Interactive Controls & Palette Toolbar */}
        <div
          style={{
            backgroundColor: 'rgba(43, 35, 32, 0.85)',
            backdropFilter: 'blur(10px)',
            padding: '1.2rem 1.8rem',
            borderRadius: '20px',
            border: '1.5px solid rgba(247, 243, 236, 0.3)',
            marginBottom: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}
        >
          {/* Color Palette Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#E8DFD3', fontWeight: 600 }}>Colors:</span>
            {colorPalette.map((color) => (
              <button
                key={color.name}
                onClick={() => {
                  setBrushColor(color.hex);
                  setActiveTool('brush');
                }}
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: color.hex,
                  border: brushColor === color.hex && activeTool === 'brush' ? '3px solid #D4AF37' : '1.5px solid rgba(255,255,255,0.4)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  transform: brushColor === color.hex && activeTool === 'brush' ? 'scale(1.2)' : 'scale(1)'
                }}
                title={color.name}
              />
            ))}
          </div>

          {/* Brush Sizes */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#E8DFD3', fontWeight: 600 }}>Brush Size:</span>
            {[3, 6, 14].map((size) => (
              <button
                key={size}
                onClick={() => setBrushSize(size)}
                style={{
                  padding: '0.3rem 0.7rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(247, 243, 236, 0.3)',
                  backgroundColor: brushSize === size ? '#F7F3EC' : 'transparent',
                  color: brushSize === size ? '#7A0000' : '#FFFDF9',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                {size === 3 ? 'Fine' : size === 6 ? 'Medium' : 'Bold'}
              </button>
            ))}

            <button
              onClick={() => setActiveTool(activeTool === 'eraser' ? 'brush' : 'eraser')}
              style={{
                padding: '0.36rem 0.9rem',
                borderRadius: '12px',
                border: '1px solid rgba(247, 243, 236, 0.3)',
                backgroundColor: activeTool === 'eraser' ? '#D4AF37' : 'transparent',
                color: activeTool === 'eraser' ? '#2B2320' : '#FFFDF9',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                marginLeft: '0.4rem'
              }}
            >
              🧹 Eraser
            </button>
          </div>

          {/* Text Input Form */}
          <form onSubmit={handleAddText} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Write a message..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: '10px',
                border: '1px solid rgba(247, 243, 236, 0.3)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#FFFDF9',
                fontSize: '0.85rem',
                outline: 'none',
                width: '150px'
              }}
            />
            <select
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
              style={{
                padding: '0.4rem 0.6rem',
                borderRadius: '10px',
                border: '1px solid rgba(247, 243, 236, 0.3)',
                backgroundColor: '#2B2320',
                color: '#FFFDF9',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            >
              <option value="Alex Brush">Script Font</option>
              <option value="Quicksand">Sans Font</option>
              <option value="Playfair Display">Serif Font</option>
            </select>
            <button
              type="submit"
              style={{
                padding: '0.4rem 0.9rem',
                borderRadius: '10px',
                backgroundColor: '#F7F3EC',
                color: '#7A0000',
                fontWeight: 600,
                fontSize: '0.85rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              + Add Text
            </button>
          </form>

          {/* Photo Upload & Clear Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <label
              style={{
                padding: '0.4rem 0.9rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(247, 243, 236, 0.15)',
                color: '#FFFDF9',
                fontWeight: 600,
                fontSize: '0.85rem',
                border: '1px solid rgba(247, 243, 236, 0.4)',
                cursor: 'pointer'
              }}
            >
              📷 Upload Photo
              <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
            </label>

            <button
              onClick={clearCanvas}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: '10px',
                backgroundColor: 'rgba(122, 0, 0, 0.6)',
                color: '#FFFDF9',
                fontWeight: 600,
                fontSize: '0.85rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer'
              }}
            >
              Clear Board
            </button>
          </div>
        </div>

        {/* Preset Aesthetic Stickers Pills */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.2rem' }}>
          <span style={{ fontSize: '0.85rem', color: '#F7EBEB', alignSelf: 'center' }}>Click sticker to pin:</span>
          {presetStickers.map((st, i) => (
            <button
              key={i}
              onClick={() => handleAddSticker(st)}
              style={{
                padding: '0.35rem 0.8rem',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFDF9',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                fontSize: '0.8rem',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              {st.label}
            </button>
          ))}
        </div>

        {/* Main Checked Moodboard Canvas Surface */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '560px',
            backgroundColor: 'rgba(122, 0, 0, 0.45)',
            borderRadius: '20px',
            border: '2px dashed rgba(247, 243, 236, 0.5)',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.4), 0 20px 40px rgba(0,0,0,0.3)',
            cursor: activeTool === 'eraser' ? 'cell' : 'crosshair'
          }}
        >
          {/* Placed Photo Cards on Board */}
          {placedImages.map((img) => (
            <div
              key={img.id}
              className="polaroid-card"
              style={{
                position: 'absolute',
                top: `${img.y}px`,
                left: `${img.x}px`,
                width: `${img.width}px`,
                transform: `rotate(${img.rotation}deg)`,
                zIndex: 5,
                padding: '6px 6px 14px 6px',
                cursor: 'move'
              }}
            >
              <div className="tape-top" style={{ width: '40px', height: '12px', top: '-6px' }} />
              <div className="polaroid-img-wrapper" style={{ height: '100px' }}>
                <img src={img.src} alt={img.label} />
              </div>
              <div className="polaroid-caption" style={{ fontSize: '0.8rem', marginTop: '4px' }}>
                {img.label}
              </div>
            </div>
          ))}

          {/* Placed Text Stickers on Board */}
          {placedTexts.map((item) => (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                top: `${item.y}px`,
                left: `${item.x}px`,
                transform: `rotate(${item.rotation}deg)`,
                fontFamily: item.font === 'Alex Brush' ? 'var(--font-script)' : item.font === 'Playfair Display' ? 'var(--font-serif)' : 'var(--font-sans)',
                fontSize: item.font === 'Alex Brush' ? '2.2rem' : '1.4rem',
                color: item.color,
                zIndex: 10,
                textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                pointerEvents: 'none'
              }}
            >
              {item.text}
            </div>
          ))}

          {/* Doodling HTML5 Canvas Layer */}
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 15
            }}
          />
        </div>
      </div>
    </section>
  );
}
