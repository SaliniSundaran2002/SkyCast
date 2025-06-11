# SkyCast 🌤️

SkyCast is a cutting-edge weather forecasting application designed to deliver precise and up-to-date weather information for any location. With its intuitive interface and dependable data, SkyCast empowers users to plan their day with confidence.

---

## 🌟 Features

- **🌍 Real-Time Weather**: Access live weather updates for your current location.
- **🔍 Location Search**: Retrieve weather details for any city or region worldwide.
- **🌗 Theme Customization**: Toggle between dark and light modes for a tailored user experience.

---

## 📸 Screenshots

### Home Screen
- Light Mode:  
    ![Light Mode Home Screen](screenshots/light.png)
- Dark Mode:  
    ![Dark Mode Home Screen](screenshots/dark.png)

### Weather Details
- Kochi:  
    ![Kochi Weather](screenshots/kochi.png)
- Trivandrum:  
    ![Trivandrum Weather](screenshots/tvm.png)

### About Section
![About SkyCast](screenshots/about.png)

---

## 🎥 Demo

<video width="600" controls>
  <source src="screenshots/Screenrecord.webm" type="video/webm">
  Your browser does not support the video tag.
</video>


---

## 🚀 Installation Guide

Follow these steps to set up and run SkyCast:

1. Clone the repository:
        ```bash
        git clone https://github.com/SaliniSundaran2002/SkyCast.git
        ```
2. Navigate to the project directory:
        ```bash
        cd SkyCast
        ```
3. Install the required dependencies:
        ```bash
        npm install
        ```
4. Launch the application:
        ```bash
        npm start
        ```

---

## 🌐 OpenWeatherMap API Configuration

SkyCast integrates with the OpenWeatherMap API to provide accurate weather data. To configure the API:

1. Register at [OpenWeatherMap](https://openweathermap.org/) and log in.
2. Generate an API key from your account dashboard.
3. Create a `.env` file in the root directory of the project.
4. Add the following line to the `.env` file:
        ```env
        VITE_WEATHER_API_KEY=your_api_key_here
        ```
5. Restart the application to apply the changes.

For additional information, refer to the [OpenWeatherMap API Documentation](https://openweathermap.org/api).

---

## 🛠️ Technologies

- **Frontend**: React, Tailwind CSS
- **API**: OpenWeatherMap API

---

> "The best way to predict the future is to create it." – Peter Drucker
