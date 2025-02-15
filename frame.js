export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    "frames": [
      {
        "image": "https://dsorder.com/preview-image.jpg",  // Cambia esta URL por la imagen de tu web
        "buttons": [
          {
            "label": "Visitar Dsorder",
            "action": "link",
            "target": "https://dsorder.com"
          }
        ]
      }
    ]
  });
}
