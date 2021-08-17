import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCellType1, setCellType2, setGene } from "./assetSlice";
import { setVisible } from "../infoModal/infoSlice";
import '../../main.css';
import { nanoid } from "@reduxjs/toolkit";

export const AssetChooser = () => {
    const options = useSelector(state => state.assets)
    const [typesSelected, setTypesSelected] = useState([])
    const [geneSelected, setGeneSelected] = useState("IL7R")
    const [selecting, setSelecting] = useState(false)
    const dispatch = useDispatch()

    const cellTypes = ["aCD4", "EP", "Ery", "FoeT", "Mac0", "Mac1", "Mac2", "MK", "Mon", "naCD4", "nB", "nCD4", "nCD8", "Neu", "tB", "tCD8"]

    const onCellTypeClicked = (cellType) => {
        if (!typesSelected.includes(cellType)) {
            const temp = typesSelected
            temp.push(cellType)
            setTypesSelected(temp)
        }
        if (typesSelected.length === 2) {
            setSelecting(false)
            dispatch(setCellType1(typesSelected[0]))
            dispatch(setCellType2(typesSelected[1]))
        }
    }

    const onGeneClicked = () => { dispatch(setGene(geneSelected)) }

    const onReselectClicked = () => {
        setSelecting(true)
        setTypesSelected([])
    }

    const infoClicked = () => { dispatch(setVisible(true)) }

    const cellButtons = cellTypes.map(cellType => (
        <button disabled={!selecting} className={(options.cellType1 === cellType || options.cellType2 === cellType) ? "button" : "muted-button"}
                key={nanoid()} onClick={() => onCellTypeClicked(cellType)} style={{margin: "3px", padding: "8px"}}>{cellType}</button>
    ))

    return (
        <>
            <div className="flex-row" style={{width: "100%", marginTop: "0.5rem", marginLeft: "0.5rem"}}>
                <button style={{margin: "3px"}} onClick={onReselectClicked} className="accent-button">{selecting ? "Select two..." : "Reselect Cell Types"}</button>
                {cellButtons}
                <button className="round-button" onClick={infoClicked}
                        style={{borderColor: "mediumpurple", backgroundColor: "mediumpurple", margin: "3px", padding: "12px", marginLeft: "6px"}}>Figure Info</button>
            </div>
            <div className="flex-row" style={{width: "100%", marginTop: "0.5rem", marginLeft: "0.5rem"}}>
                <input style={{color: "antiquewhite", flexBasis: "50%", marginLeft: "0.2rem", marginTop: "0.2rem"}}
                       placeholder={geneSelected} type="text" onChange={(e) => { setGeneSelected(e.target.value) }}/>
                <button style={{marginLeft: "10px", marginTop: "0.2rem"}} onClick={onGeneClicked}>Choose Gene</button>
            </div>
        </>
    )
}