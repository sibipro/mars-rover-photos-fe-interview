# Mars Rover Photos

This project will be used to test front-end engineering candidates at SIBI. The project uses NASA's open apis to show information from the 3 Mars Rovers (Opportunity, Curiosity and Spirit). You can view more information on the APIs available by going to [https://api.nasa.gov/](https://api.nasa.gov/), selecting `Browse Apis` and selecting `Mars Rover Photos`.

## Pre-requisites

1. The candidate will need a NASA open api key. You can get one from here - [https://api.nasa.gov/](https://api.nasa.gov/)

2. The candidate will be using [Zoom](https://zoom.us)

## Interview Task 1 - Add Show / Hide Mission Manifest on Rover Detail Page

### Mission Manifest

A mission manifest is available for each Rover at /manifests/rover_name. This manifest will list details of the Rover's mission to help narrow down photo queries to the API. The information in the manifest includes:

| Key          | Description                                         |
| ------------ | --------------------------------------------------- |
| name         | Name of the Rover                                   |
| landing_date | The Rover's landing date on Mars                    |
| launch_date  | The Rover's launch date from Earth                  |
| status       | The Rover's mission status                          |
| max_sol      | The most recent Martian sol from which photos exist |
| max_date     | The most recent Earth date from which photos exist  |
| total_photos | Number of photos taken by that Rover                |

### Scenario

We would like to add a new feature to the mars-rover photo app that will give users the ability to show/hide the Mission Manifest on the Rover Detail page.

Initially the Rover's mission manifest will not be shown when the rover detail page is first loaded,

- Pressing the "Show Manifest" button will call the NASA endpoint to get the manifest for the rover.

A sample API call to fetch the manifest for the Curiosity rover is shown below

[https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=DEMO_KEY](https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=DEMO_KEY)

Here is a sample response from the manifest request

```
{
    "photo_manifest": {
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 2786,
        "max_date": "2020-06-07",
        "total_photos": 425068,
        "photos": []
    }
}
```

### API KEY

The api key is in the `<rootDirectory>/.env` file and can be accessed by `process.env.NEXT_PUBLIC_NASA_API_KEY`

## Running the project

1. Clone or Fork the repository

```
git clone git@github.com:sibipro/mars-rover-photos-fe-interview.git
```

2. Go into the project root folder and install the dependencies

```
yarn
```

3. Run the project

```
yarn dev
```

## Running tests

```
yarn test
```
