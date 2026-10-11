// ALL editable content lives here. Replace images in /public/images using the same filenames,
// or change the `image` paths below.

export const site = {
  name: 'Aadya Singh',
  brand: 'Aadya Singh — Photography',
  label: 'Photography Portfolio · 2026',
  headline: 'Through My Lens.',
  subline: 'Capturing the beauty of everyday moments, one frame at a time.',
  // Contact: leave '' to hide. Nothing is invented.
  email: '',        // e.g. 'aadya@example.com'
  instagram: '',    // e.g. 'https://instagram.com/yourhandle'
  society: '',      // e.g. 'https://yourcollege.edu/photography-society'
  societyName: 'College Photography Society',
  images: { hero: '/images/hero.jpg', about: '/images/about.jpg' },
}

export const categories = [
  { key: 'all', label: 'All Work', full: 'All Work' },
  { key: 'portrait', label: 'Portraits', full: 'Portrait Photography' },
  { key: 'nature', label: 'Nature', full: 'Nature & Landscapes' },
  { key: 'street', label: 'Street', full: 'Street Photography' },
  { key: 'architecture', label: 'Architecture', full: 'Architecture & Details' },
  { key: 'creative', label: 'Creative', full: 'Creative & Experimental' },
]

// ratio: '3/4' portrait, '4/3' landscape, '1/1' square. Reserves space so nothing jumps while loading.
const g = (id, title, category, file, ratio, caption, location, year) =>
  ({ id, title, category, image: `/images/${file}`, ratio, alt: `${title}. ${caption}`, caption, location, year })

export const gallery = [
  g(1, 'The Quiet Gaze', 'portrait', 'portrait-01.jpg', '3/4', 'A calm look that says more than words.'),
  g(2, 'Golden Hour', 'nature', 'nature-01.jpg', '4/3', 'Warm light settling over the land.'),
  g(3, 'Between the Streets', 'street', 'street-01.jpg', '3/4', 'A passing moment in a busy lane.'),
  g(4, 'Lines of Silence', 'architecture', 'architecture-01.jpg', '3/4', 'Geometry that holds its breath.'),
  g(5, 'The Art of Shadows', 'creative', 'creative-01.jpg', '4/3', 'Darkness shaping the frame.'),
  g(6, 'A Moment Unscripted', 'portrait', 'portrait-02.jpg', '3/4', 'Laughter caught before it faded.'),
  g(7, 'Nature in Stillness', 'nature', 'nature-02.jpg', '4/3', 'Quiet details of the natural world.'),
  g(8, 'Stories in Motion', 'street', 'street-02.jpg', '4/3', 'Everyday life, always on the move.'),
  g(9, 'Light and Perspective', 'architecture', 'architecture-02.jpg', '1/1', 'Looking up changes everything.'),
  g(10, 'Reflections', 'creative', 'creative-02.jpg', '1/1', 'A second world inside the first.'),
  g(11, 'Unspoken Stories', 'portrait', 'portrait-03.jpg', '1/1', 'Emotion held in a small gesture.'),
  g(12, 'After the Rain', 'nature', 'nature-03.jpg', '3/4', 'Freshness lingering in the air.'),
  g(13, 'The World in Details', 'street', 'street-03.jpg', '4/3', 'Small things that make a place.'),
  g(14, 'Fragments of Light', 'architecture', 'architecture-03.jpg', '3/4', 'Light broken into pieces.'),
  g(15, 'Beyond the Ordinary', 'creative', 'creative-03.jpg', '3/4', 'An everyday scene, seen differently.'),
]

export const about = {
  heading: 'Behind the Lens',
  intro: "Hello, I'm Aadya Singh. Photography is my way of noticing the little things that often go unseen — the way light falls across a face, the character of a place, or the emotion hidden in an ordinary moment. Through my photographs, I hope to tell stories, experiment with perspectives, and continue discovering my own creative voice.",
  paragraphs: [
    { title: 'My approach', text: 'I slow down before I press the shutter. I look at where the light is coming from, what sits at the edges of the frame, and what feels worth keeping.' },
    { title: 'What photography means to me', text: 'It teaches me to pay attention. A frame is a small decision about what matters, and I enjoy that quiet kind of storytelling.' },
    { title: 'Why the Photography Society', text: 'I want to learn from other photographers, take on shared projects, and get honest feedback that pushes my work further.' },
  ],
}

export const interests = [
  { title: 'Portraits & Human Emotions', text: 'Expressions, gestures and the stories people carry.' },
  { title: 'Nature & Natural Light', text: 'Chasing the way daylight changes a landscape.' },
  { title: 'Street & Everyday Life', text: 'Unposed scenes from ordinary days.' },
  { title: 'Architecture & Composition', text: 'Lines, symmetry and the geometry of spaces.' },
  { title: 'Experimental Visual Storytelling', text: 'Reflections, shadows and unusual angles.' },
]

export const process = {
  heading: 'Every Frame Tells a Story',
  steps: [
    { title: 'Observe', text: 'Finding beauty, emotion, and stories in ordinary moments.' },
    { title: 'Compose', text: 'Exploring framing, light, perspective, colour, and balance.' },
    { title: 'Capture', text: 'Preserving a fleeting moment through a thoughtful photograph.' },
  ],
}

export const featured = {
  image: '/images/featured.jpg',
  alt: 'Featured photograph by Aadya Singh',
  heading: 'One moment. A thousand stories.',
  caption: 'My favourite frame. Replace this with the photograph that means the most to you.',
}
