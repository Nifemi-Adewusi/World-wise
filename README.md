# 🌍 WorldWise: Your Digital Travel Companion

![WorldWise Logo](public/logo.png)

## 🚀 Welcome, Globetrotter!

Ever found yourself struggling to remember all the amazing places you've visited? Or perhaps you're planning your next adventure and want to keep track of your bucket list destinations? **WorldWise** is here to save the day!

WorldWise is your personal travel diary, map, and memory keeper all rolled into one beautiful application. Track your footsteps across the globe, add notes about your experiences, and never forget that amazing little café in Paris or that breathtaking sunset in Bali.

## 🛠️ Installation & Setup

Getting started with WorldWise is as easy as following these steps:

```bash
# Clone the repository (if you haven't already)
git clone https://github.com/yourusername/worldwise.git

# Navigate to the project directory
cd worldwise

# Install dependencies
npm install

# Start the development server
npm run dev

# Start the JSON server for the backend (in a new terminal)
npm run server
```

Once both servers are running:

- Frontend will be available at: http://localhost:5173
- Backend API will be available at: http://localhost:8000

## ✨ Features That Make Travel Tracking Fun

### 🗺️ Interactive World Map

- **Click and Pin**: Drop pins on any location you've visited
- **Visual Journey**: See all your adventures displayed on a beautiful map
- **Current Location**: Find yourself with a single click

### 📝 Detailed Travel Logs

- **City & Country Tracking**: Organize your travels by cities or countries
- **Date Stamping**: Remember exactly when you visited each place
- **Personal Notes**: Jot down memories, recommendations, or future plans

### 🔍 Smart Location Detection

- **Automatic City Recognition**: We'll identify the city based on where you click
- **Country Flags**: Each location comes with its country's flag for easy visual recognition

### 🌐 Seamless Navigation

- **Intuitive Interface**: Switch between map view and list view effortlessly
- **Quick Access**: Jump to any city's details with a single click

## 🧩 Application Architecture

### 📱 User Interface Components

```
WorldWise
├── 🏠 Public Pages
│   ├── Homepage - Your entry point to adventure
│   ├── Product - Discover what makes WorldWise special
│   ├── Pricing - Travel tracking for every budget
│   └── Login - Your personal travel portal
│
└── 🗺️ Main Application
    ├── Map - Your world at a glance
    ├── Sidebar - Navigation central
    │   ├── Cities View - All your urban adventures
    │   └── Countries View - Your country collection
    ├── City Details - Deep dive into each location
    └── Add City Form - Document your latest conquest
```

### 🔄 Data Flow: How Your Travel Data Moves

1. **Adding a New City**:

   - 📍 Click on the map
   - 🔍 We detect the city and country
   - 📝 Add your visit date and memories
   - 💾 Save to your personal travel log
   - 🎉 See your updated map and lists!

2. **Exploring Your Travels**:

   - 👀 View all cities or filter by countries
   - 🖱️ Click on any city for details
   - 🔎 Zoom in on the map to revisit the location
   - 📚 Read your notes and memories
   - 🔗 Quick link to Wikipedia for more info

3. **Managing Your Travel Log**:
   - ❌ Remove cities you want to delete
   - 🔄 Your map and lists update instantly

## 📊 The Data Behind Your Travels

Each city in your travel log contains:

```json
{
  "cityName": "Tokyo",
  "country": "Japan",
  "emoji": "🇯🇵",
  "date": "2023-04-15T08:22:53.976Z",
  "notes": "Amazing ramen at that tiny shop in Shinjuku!",
  "position": {
    "lat": 35.6762,
    "lng": 139.6503
  },
  "id": 12345678
}
```

## 🚶‍♀️ User Journey: From Homepage to Travel Log

1. **Landing on the Homepage**:

   - Learn about WorldWise's mission
   - Get inspired to track your travels
   - Click "Start Tracking Now"

2. **Entering the Application**:

   - View your existing travel map (or an empty one ready to be filled)
   - Navigate between cities and countries views
   - Explore the interactive map

3. **Adding Your First City**:

   - Click anywhere on the map
   - Fill in details about your visit
   - Save and watch your travel log begin to grow!

4. **Building Your Travel Story**:
   - Continue adding cities as you explore the world
   - Create a beautiful visual representation of your adventures
   - Revisit memories with just a few clicks

## 🧠 Smart Features for Savvy Travelers

- **Unique Country Counting**: We automatically organize and count countries you've visited
- **Geolocation Integration**: Find and add your current location with one click
- **Wikipedia Links**: Quick access to learn more about the places you've been
- **Responsive Design**: Track your travels on any device, anywhere

## 🛠️ Under the Hood: Tech Magic

WorldWise is built with modern web technologies to ensure a smooth, responsive experience:

- **React**: For a lightning-fast user interface
- **React Router**: Seamless navigation between different views
- **Context API + useReducer**: Sophisticated state management
- **React Leaflet**: Interactive mapping capabilities
- **CSS Modules**: Clean, scoped styling
- **Geolocation API**: Finding your current position
- **BigDataCloud API**: Reverse geocoding to identify locations

## 📁 Project Structure

```
worldwise/
├── public/               # Static assets
│   ├── logo.png          # Application logo
│   └── ...               # Other images and assets
├── data/                 # Data files
│   └── cities.json       # JSON database for cities
├── src/                  # Source code
│   ├── Components/       # UI components
│   │   ├── Map.jsx       # Interactive map component
│   │   ├── Sidebar.jsx   # Application sidebar
│   │   ├── CityList.jsx  # List of cities
│   │   └── ...           # Other components
│   ├── contexts/         # React contexts
│   │   └── Context.jsx   # Main application context
│   ├── hooks/            # Custom React hooks
│   │   ├── useGeolocation.js  # Hook for accessing user location
│   │   └── usePosition.js     # Hook for URL position parameters
│   ├── Pages/            # Page components
│   │   ├── HomePage.jsx  # Landing page
│   │   ├── AppLayout.jsx # Main application layout
│   │   └── ...           # Other pages
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
└── package.json          # Project dependencies and scripts
```

## 🚀 Usage Guide

### Starting Your Journey

1. **Navigate to the Homepage**:

   - Open your browser and go to http://localhost:5173
   - Explore the landing page to learn about WorldWise

2. **Enter the Application**:
   - Click "Start Tracking Now" to enter the main application
   - You'll be redirected to the cities view by default

### Tracking Your Travels

1. **Adding a New City**:

   - Click anywhere on the map
   - The form will open automatically with the location details
   - Add your visit date and any notes
   - Click "Add" to save the city to your travel log

2. **Viewing Your Cities**:

   - Click on "Cities" in the sidebar to see all your visited cities
   - Click on any city in the list to view its details
   - The map will automatically center on the selected city

3. **Exploring by Country**:

   - Click on "Countries" in the sidebar to see all countries you've visited
   - Each country is displayed with its flag and name

4. **Using Your Current Location**:
   - Click "Get Current Position" on the map to center it on your current location
   - You can then add your current city to your travel log

### Managing Your Data

1. **Deleting a City**:

   - Find the city in your cities list
   - Click the "×" button to remove it from your travel log

2. **Viewing City Details**:
   - Click on any city in your list
   - View the date of your visit and any notes you added
   - Click the Wikipedia link to learn more about the city

## 🔮 Future Roadmap

We're constantly improving WorldWise! Here are some features we're working on:

- **Trip Planning**: Mark cities you want to visit in the future
- **Photo Integration**: Add photos to your city memories
- **Travel Statistics**: See visualizations of your travel patterns
- **Social Sharing**: Share your travel map with friends
- **Offline Mode**: Access your travel log even without internet

## 🤝 Contributing

We welcome contributions to make WorldWise even better! Here's how you can help:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 👩‍💻 Technical Implementation Details (For the Curious)

### Routing Structure

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="product" element={<Product />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="login" element={<Login />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="layout" element={<AppLayout />}>
      <Route index element={<Navigate replace to="cities" />} />
      <Route path="cities" element={<CityList />} />
      <Route path="cities/:id" element={<City />} />
      <Route path="countries" element={<CountryList />} />
      <Route path="form" element={<Form />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### State Management with Context & Reducer

```jsx
const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  currentPosition: [40, 0],
  currentCountry: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "cities/created":
      return { ...state, cities: [...state.cities, action.payload] };
    // ... other actions
  }
}
```

### Map Implementation with React Leaflet

```jsx
<MapContainer
  className={styles.map}
  center={position}
  zoom={10}
  scrollWheelZoom={true}
>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
  />

  {cities.map((city) => (
    <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
      <Popup>
        <span>{city.emoji}</span> <span>{city.cityName}</span>
      </Popup>
    </Marker>
  ))}

  <ChangeCenter position={position} />
  <DetectClick />
</MapContainer>
```

---

_WorldWise: Because every journey deserves to be remembered!_ 🌍✈️🧳
