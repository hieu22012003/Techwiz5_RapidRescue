import { Client } from "@stomp/stompjs";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import "./css/page/FindAmbulance.css";
import customIconMark from "./images/location/marker.svg";
const FindAmbulance = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const customIcon = L.icon({
    iconUrl: customIconMark,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  useEffect(() => {
    // Kết nối tới WebSocket server
    const socket = new SockJS("http://localhost:8080/ws-location");
    const stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("Connected to WebSocket server");
        stompClient.subscribe("/topic/location", (message) => {
          console.log("Received message: ", message);
          const locationData = JSON.parse(message.body);
          console.log("Location data: ", locationData);
          setLocation({
            lat: locationData.latitude,
            lng: locationData.longitude,
          });
        });
      },
    });

    stompClient.activate();

    return () => {
      stompClient.deactivate(); // Hủy kết nối WebSocket khi component bị gỡ bỏ
    };
  }, []);
  const ambulanceLocation = {
    latitude: 21.028778,
    longitude: 105.782,
  };

  // const position = [ambulanceLocation.latitude, ambulanceLocation.longitude];
  console.log("Position:", location);
  const position = [location.lat, location.lng];

  useEffect(() => {
    // Khởi tạo bản đồ chỉ một lần
    const initialMap = L.map(mapRef.current).setView(position, 18);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(initialMap);

    const initialMarker = L.marker(position, { icon: customIcon })
      .addTo(initialMap)
      .bindPopup("Vị trí xe cứu thương")
      .openPopup();

    setMap(initialMap);
    setMarker(initialMarker);

    // Dọn dẹp khi component bị unmount
    return () => {
      initialMap.remove();
    };
  }, []); // Chạy 1 lần khi mount

  useEffect(() => {
    if (map && marker) {
      // Cập nhật vị trí của marker khi position thay đổi
      marker.setLatLng(position);
      map.setView(position, 18); // Cập nhật vị trí bản đồ
    }
  }, [position, map, marker]); // Chạy khi position thay đổi

  return (
    <div
      className="container-fluid container-tracker"
      style={{ padding: "150px 0" }}>
      <div className="m-auto d-flex find-container">
        <input
          type="text"
          className="input-find"
          placeholder="Input license plate"
        />
        <input type="button" className="btn-find" value="Find" />
      </div>
      <div id="map" ref={mapRef} />
    </div>
  );
};

export default FindAmbulance;
