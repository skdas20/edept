export default function TestCSS() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">CSS Test Page</h1>
      <div className="bg-red-500 text-white p-4 mb-4">Red background with white text</div>
      <div className="bg-green-500 text-white p-4 mb-4">Green background with white text</div>
      <div className="bg-primary text-white p-4 mb-4">Primary color (custom)</div>
      <div className="bg-accent text-white p-4 mb-4">Accent color (custom)</div>
      <p className="text-muted-text">Muted text color (custom)</p>
    </div>
  );
}
