import { Megaphone, Camera, MapPin, Users, MessageSquare, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const CATEGORIAS_REPORTE = [
  { icon: <AlertTriangle className="w-5 h-5" />, label: 'Inseguridad / Delitos', color: 'text-red-600 bg-red-50 border-red-200' },
  { icon: <Camera className="w-5 h-5" />, label: 'Problemas Ecológicos', color: 'text-green-600 bg-green-50 border-green-200' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Obras y Baches', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { icon: <MessageSquare className="w-5 h-5" />, label: 'Burocracia Municipal', color: 'text-purple-600 bg-purple-50 border-purple-200' },
  { icon: <Users className="w-5 h-5" />, label: 'Violencia de Género', color: 'text-pink-600 bg-pink-50 border-pink-200' },
  { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Salud Pública', color: 'text-azul-600 bg-azul-50 border-azul-200' },
];

export default function AlzaLaVozPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Get user location on mount
  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setError(null);
      },
      (error) => {
        setError(`Error getting location: ${error.message}`);
        setLocation(null);
      }
    );
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(previews);
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newPreviews = [...previewUrls];
    URL.revokeObjectURL(previewUrls[index]);
    newPreviews.splice(index, 1);
    setPreviewUrls(newPreviews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !category) {
      setError('Please fill in all fields and select a category');
      return;
    }
    if (!location) {
      setError('Unable to determine your location. Please try again.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Prepare description with category and location
      const formattedDescription = `CATEGORY: ${category}\nLAT: ${location.lat}, LNG: ${location.lng}\n${description}`;

      // Convert images to base64
      const imagePromises = images.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64 = reader.result as string;
            // Remove the data URL prefix if present (e.g., "data:image/jpeg;base64,")
            const base64Data = base64.split(',')[1];
            resolve(base64Data);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      const imageBase64Array = await Promise.all(imagePromises);

      // Send request to backend
      const response = await fetch('/api/community-reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.trim(),
          description: formattedDescription,
          evidenceUrls: imageBase64Array,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit report');
      }

      // We don't need the result, just know it succeeded
      await response.json();
      setSuccess(true);
      // Reset form
      setTitle('');
      setDescription('');
      setCategory(null);
      setImages([]);
      setPreviewUrls([]);
      // Keep location for next report? Optional: we can clear it or keep it.
      // setLocation(null);
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const message = (err as any).message || 'An unknown error occurred';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Alza la Voz
        </h1>
        <p className="text-slate-500">
          Reporta, documenta y escala. Convierte tu frustración en acción con evidencia verificable.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Brief title for your report"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracota-500"
            disabled={loading}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what happened in detail"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracota-500 h-32"
            disabled={loading}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Category
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {CATEGORIAS_REPORTE.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setCategory(category === cat.label ? null : cat.label)}
                disabled={loading}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl border text-center transition-colors ${
                  category === cat.label
                    ? 'bg-terracota-500 text-white'
                    : cat.color
                } ${category === cat.label ? 'border-terracota-500' : 'border-transparent'}`}
              >
                {cat.icon}
                <span className="text-xs font-semibold leading-tight">{cat.label}</span>
              </button>
            ))}
          </div>
          {category && (
            <p className="mt-2 text-sm text-terracota-600">
              Selected: {CATEGORIAS_REPORTE.find((c) => c.label === category)?.label}
            </p>
          )}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">
            Location
          </label>
          {location ? (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-terracota-500" />
              <span className="text-sm">
                Lat: {location.lat.toFixed(4)}, Lng: {location.lng.toFixed(4)}
              </span>
              <button
                onClick={() => {
                  navigator.geolocation.getCurrentPosition(
                    (pos) => {
                      setLocation({
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                      });
                    },
                    (err) => {
                      setError(`Error updating location: ${err.message}`);
                    }
                  );
                }}
                className="text-xs text-terracota-600 hover:underline"
              >
                Refresh
              </button>
            </div>
          ) : (
            <p className="text-sm text-terracota-500">
              Waiting for location... <span className="animate-pulse">•••</span>
            </p>
          )}
          {error && (
            <p className="text-sm text-red-500">
              {error.replace('Error getting location:', '').trim()}
            </p>
          )}
        </div>

        {/* Images */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Upload Evidence (Images)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mb-2"
          />
          {previewUrls.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative inline-block mr-2">
                  <img src={url} alt="preview" className="h-16 w-16 object-cover rounded" />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white hover:bg-red-600"
                    aria-label="Remove image"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          ) : null}
          <p className="text-xs text-slate-500">
            Max 5 images recommended. Supported formats: JPG, PNG.
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading || !title.trim() || !description.trim() || !category || !location}
            className={`flex items-center gap-2 px-4 py-2 bg-terracota-500 text-white font-medium rounded-md hover:bg-terracota-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {loading ? (
              <>
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                <span className="ml-2">Submitting...</span>
              </>
            ) : (
              <>
                <Megaphone className="w-4 h-4" />
                <span>Submit Report</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Status Messages */}
      {error && (
        <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
          Report submitted successfully! Thank you for contributing to your community.
        </div>
      )}
    </div>
  );
}