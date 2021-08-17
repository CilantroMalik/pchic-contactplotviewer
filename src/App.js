import './App.css';
import './main.css';
import { AssetChooser } from './features/assetChooser/AssetChooser';
import { PlotViewer } from './features/plotViewer/PlotViewer'
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setVisible } from "./features/infoModal/infoSlice";

function App() {

  const dispatch = useDispatch()
  const plotType = useSelector(state => state.assets.assetType)
  const info = useSelector(state => state.info.visible)

  let explanation = "These plots depict the raw counts of PC-HiC observed interactions vs genomic distance from the bait locus. " +
      "The p-values corresponding to the determined significance of each interaction are also plotted in red on a negative log scale."

  return (
      <>
        <div className="App" style={info ? {transition: "filter 0.3s ease-out", filter: "blur(10px) opacity(50%) brightness(50%)"} : {transition: "filter 0.3s ease-in"}}>
          <AssetChooser />
          <PlotViewer />
        </div>
        { info &&
        <div style={{borderRadius: "15px", position: "absolute", top: "25vh", left: "25vw",
          width: "50%", backgroundColor: "gray", textAlign: "center"}}>
          <h3 style={{color: "antiquewhite"}}>{plotType}</h3>
          <p style={{margin: "3%"}}>{explanation}</p>
          <button onClick={() => dispatch(setVisible(false))} style={{marginBottom: "3%"}}>Close</button>
        </div>
        }
      </>
  );
}

export default App;