import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import '../../main.css';
import { setGene } from "../assetChooser/assetSlice";

export const PlotViewer = () => {
    const options = useSelector(state => state.assets)
    const dispatch = useDispatch()

    function imageExists(image_url){
        let http = new XMLHttpRequest();
        http.open('HEAD', image_url, false);
        http.send();
        return http.status !== 404;
    }

    if (!imageExists(process.env.PUBLIC_URL+"/images/"+options.cellType1+"/"+options.gene+".jpg")) {
        dispatch(setGene("ERROR"))
    }

    return (
        <>
            { options.gene !== "ERROR" &&
                <div className="flex-row" style={{width: "100%", marginTop: "0.5rem", marginLeft: "0.5rem"}}>
                    <h2 style={{
                        color: "antiquewhite",
                        marginTop: "19%",
                        marginRight: "10px"
                    }}>{options.cellType1}</h2>
                    <img style={{width: "38%", height: "38%", margin: "10px", borderRadius: "10px"}}
                         src={process.env.PUBLIC_URL + "/images/" + options.cellType1 + "/" + options.gene + ".jpg"}
                         alt=""/>
                    <img style={{width: "38%", height: "38%", margin: "10px", borderRadius: "10px"}}
                         src={process.env.PUBLIC_URL + "/images/" + options.cellType2 + "/" + options.gene + ".jpg"}
                         alt=""/>
                    <h2 style={{
                        color: "antiquewhite",
                        marginTop: "19%",
                        marginLeft: "10px"
                    }}>{options.cellType2}</h2>
                </div>
            }
            { options.gene === "ERROR" &&
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <h3 style={{color: "antiquewhite"}}>That gene isn't available — perhaps it was mistyped?</h3>
                </div>
            }
        </>
    )
}
