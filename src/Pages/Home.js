import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import MediaCard from "../Component/MediaCard";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Button, Grid } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./style.css";
function Home() {
  const [data, setData] = useState("");
  const [lat, setLat] = useState("6.9319");
  const [lon, setLon] = useState("79.847");
  const [expanded, setExpanded] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2cdf5cb1725c1c0835236f30ecc22c70`;

  const searchLocation = () => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    searchLocation();
  }, []);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <TextField
          id="outlined-basic"
          label="Lat"
          variant="outlined"
          value={lat}
          onChange={(e) => {
            setLat(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Lon"
          variant="outlined"
          value={lon}
          onChange={(e) => {
            setLon(e.target.value);
          }}
        />
        <Button onClick={searchLocation}>Check Whether</Button>
      </div>
      <div
        style={{ display: "flex", marginTop: "30px", justifyContent: "center" }}
      >
        <Grid md={12}>
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <MediaCard
                whether={data ? data.list[0].main.feels_like : null}
                description={data ? data.list[0].weather[0].description : null}
                img={data ? data.list[0].weather[0].icon : null}
                main={data ? data.list[0].weather[0].main : null}
                date={data ? data.list[0].dt_txt : null}
              />
            </div>
            <div>
              <MediaCard
                whether={data ? data.list[8].main.feels_like : null}
                description={data ? data.list[8].weather[0].description : null}
                img={data ? data.list[8].weather[0].icon : null}
                main={data ? data.list[8].weather[0].main : null}
                date={data ? data.list[8].dt_txt : null}
              />
            </div>
            <div>
              <MediaCard
                whether={data ? data.list[16].main.feels_like : null}
                description={data ? data.list[16].weather[0].description : null}
                img={data ? data.list[16].weather[0].icon : null}
                main={data ? data.list[16].weather[0].main : null}
                date={data ? data.list[16].dt_txt : null}
              />
            </div>
            <div onClick={handleExpandClick}>
              {!expanded ? (
                <>
                  More
                  <span style={{ top: "6px", position: "relative" }}>
                    <KeyboardArrowRightIcon />
                  </span>
                </>
              ) : (
                <>
                  <span style={{ top: "6px", position: "relative" }}>
                    <KeyboardArrowLeftIcon />
                  </span>
                  Less
                </>
              )}
            </div>
          </div>
          <Collapse
            orientation="horizontal"
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ marginTop: "10px" }}>
                <MediaCard
                  whether={data ? data.list[24].main.feels_like : null}
                  description={
                    data ? data.list[24].weather[0].description : null
                  }
                  img={data ? data.list[24].weather[0].icon : null}
                  main={data ? data.list[24].weather[0].main : null}
                  date={data ? data.list[24].dt_txt : null}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <MediaCard
                  whether={data ? data.list[32].main.feels_like : null}
                  description={
                    data ? data.list[32].weather[0].description : null
                  }
                  img={data ? data.list[32].weather[0].icon : null}
                  main={data ? data.list[32].weather[0].main : null}
                  date={data ? data.list[32].dt_txt : null}
                />
              </div>
            </div>
          </Collapse>
        </Grid>
      </div>
    </>
  );
}

export default Home;
