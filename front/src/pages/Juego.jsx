import { Link, Outlet, useLocation } from "react-router-dom"
import Menu6 from '../components/Menu6'
import '../styles/Juego.css'
import { drawHand } from "./utilities";


import { useEffect, useRef, useState } from 'react'
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";

import Webcam from "react-webcam";
import { drawRect } from "../utilities/utilities";

import { vowels } from "../utilities/nivel1";
import { consonants } from "../utilities/nivel2";
import { complexWords } from "../utilities/nivel3";

import a from '../assets/a.png'
import b from '../assets/b.png'
import c from '../assets/c.png'
import d from '../assets/d.png'
import e from '../assets/e.png'
import f from '../assets/f.png'
import g from '../assets/g.png'
import h from '../assets/h.png'
import i from '../assets/i.png'
import k from '../assets/k.png'
import l from '../assets/l.png'
import m from '../assets/m.png'
import n from '../assets/n.png'
import o from '../assets/o.png'
import p from '../assets/p.png'
import q from '../assets/q.png'
import r from '../assets/r.png'
import s from '../assets/s.png'
import t from '../assets/t.png'
import u from '../assets/u.png'
import v from '../assets/v.png'
import w from '../assets/w.png'
import x from '../assets/x.png'
import y from '../assets/y.png'

export default function Juego() {
    const canvasRef = useRef(null);
    const webcamRef = useRef(null);
    const location = useLocation();
    const [word, setWord] = useState("");
    const [words, setWords] = useState([]);
    const wordsRef = useRef(words);
    const wordRef = useRef(word);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const nivel = searchParams.get("nivel");
        console.log("Selected nivel:", nivel);
        // setNivel(nivel);
        let wordsArr = [];

        switch (nivel) {
            case "Nivel1":
                wordsArr = vowels;
                break;
            case "Nivel2":
                wordsArr = consonants;
                break;
            case "Nivel3":
                wordsArr = complexWords;
                break;
            default:
                wordsArr = [];

        }

        setWords(wordsArr);
        wordsRef.current = wordsArr;
        console.log("wordsRef.current", wordsRef.current);
        selectRandomWord();

    }, [location]);


    const selectRandomWord = () => {
        const wordsArray = Object.values(wordsRef.current);
        console.log("wordsArray", wordsArray);
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        const randomWord = wordsArray[randomIndex];
        console.log("randomWord", randomWord);
        setWord(randomWord);
        console.log("wordRef.current", wordRef.current);
        setWord(randomWord);
        wordRef.current = randomWord;
    };


    const runCoco = async () => {
        const net = await handpose.load();
        console.log("Handpose model loaded.");

        //  Loop and detect hands
        setInterval(() => {
            detect(net, word);
        }, 10);
    };

    const detect = async (net) => {
        // Check data is available
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // Make Detections
            const hand = await net.estimateHands(video);
            // console.log(hand);

            //
            //Crear otro gesto pointing
            //
            const PointingGesture = new fp.GestureDescription('pointing');
            PointingGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.85);
            // PointingGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl,0.5);
            PointingGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.95);
            // PointingGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.9);
            // PointingGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.9);
            for (let finger of [fp.Finger.Thumb, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
                PointingGesture.addCurl(finger, fp.FingerCurl.FullCurl, 0.85);
                PointingGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
            }

            //Gesto palma

            const Palma = new fp.GestureDescription('palma')


            for (let finger of [
                fp.Finger.Thumb,
                fp.Finger.Index,
                fp.Finger.Middle,
                fp.Finger.Ring,
                fp.Finger.Pinky
            ]) {

                Palma.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
            }
            for (let finger of [
                fp.Finger.Index,
                fp.Finger.Middle,
                fp.Finger.Ring,
                fp.Finger.Pinky
            ]) {

                Palma.addDirection(finger, fp.FingerDirection.VerticalUp, 0.95);
                Palma.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 0.2);
                Palma.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 0.2);
            }

            // Thumb
            Palma.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.5);
            Palma.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.5);



            //Gesto ok

            const Ok = new fp.GestureDescription('ok')

            // thumb:
            Ok.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
            Ok.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, .75);

            // index:
            Ok.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
            Ok.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, .75);

            // Middle:
            Ok.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
            Ok.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, .75);


            // Ring:
            Ok.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
            Ok.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, .75);


            // Pinky:
            Ok.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
            Ok.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, .75);

            // gesto a

            const AGesture = new fp.GestureDescription('a')

            // Dedo pulgar
            AGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
            AGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.75);

            // Dedo índice
            AGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
            AGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo medio
            AGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
            AGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo anular
            AGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
            AGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo meñique
            AGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
            AGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.75);

            const EGesture = new fp.GestureDescription('e')

            // Dedo índice
            EGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 0.75);
            EGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo pulgar
            EGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
            EGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.75);

            // Dedo medio
            EGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 0.75);
            EGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo anular
            EGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 0.75);
            EGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo meñique
            EGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 0.75);
            EGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.75);


            const IGesture = new fp.GestureDescription('i')

            // Dedo índice
            IGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
            IGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo pulgar
            IGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
            IGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo medio
            IGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
            IGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo anular
            IGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
            IGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo meñique
            IGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
            IGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.75);




            const OGesture = new fp.GestureDescription('o')

            // Dedo índice
            OGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
            OGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.75);

            // Dedo pulgar
            OGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
            OGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.75);

            // Dedo medio
            OGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
            OGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.75);

            // Dedo anular
            OGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
            OGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.75);

            // Dedo meñique
            OGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);
            OGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.75);

            // letra u

            const UGesture = new fp.GestureDescription('u')

            // Dedo índice
            UGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
            UGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);

            // Dedo pulgar
            UGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
            UGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);

            // Dedo medio
            UGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
            UGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);

            // Dedo anular
            UGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
            UGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);

            // Dedo meñique
            UGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
            UGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);



            // Consonantes

            // letra b
            const BGesture = new fp.GestureDescription('b')

            // Dedo índice
            BGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
            BGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo pulgar
            BGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
            // BGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.75);

            // Dedo medio
            BGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
            BGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo anular
            BGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
            BGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo meñique
            BGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
            BGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.75);

            // letra c
            const CGesture = new fp.GestureDescription('c')

            // Dedo índice
            CGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
            CGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.75);

            // Dedo pulgar
            CGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
            CGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.75);

            // Dedo medio
            CGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
            CGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.75);

            // Dedo anular
            CGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
            CGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.75);

            // Dedo meñique
            CGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);
            CGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.75);

            // letra d
            const DGesture = new fp.GestureDescription('d')

            // Dedo índice
            DGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
            DGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

            // Dedo pulgar
            DGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
            DGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 0.75);

            // Dedo medio
            DGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
            DGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo anular
            DGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
            DGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo meñique
            DGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
            DGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.75);

            // letra g
            const GGesture = new fp.GestureDescription('g')

            // Dedo índice
            GGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.85);
            GGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 0.75);

            // Dedo medio
            GGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 0.85);
            GGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 0.75);

            // letra h
            const HGesture = new fp.GestureDescription('h')

            // Dedo índice
            HGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.85);
            HGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 0.75);

            // Dedo medio
            HGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.85);
            HGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 0.75);


            // letra k
            const KGesture = new fp.GestureDescription('k')

            // Dedo índice
            KGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.9);
            KGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo medio
            KGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.9);
            KGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo pulgar
            KGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
            KGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.70);

            // letra l
            const LGesture = new fp.GestureDescription('l')

            // Dedo índice
            LGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.9);
            LGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo medio
            LGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 0.9);
            LGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo pulgar
            LGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
            LGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 0.95);

            // letra m
            const MGesture = new fp.GestureDescription('m')

            // Dedo índice
            MGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.9);
            MGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 0.75);

            // Dedo medio
            MGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.9);
            MGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalDown, 0.75);

            // Dedo anular
            MGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 0.9);
            MGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalDown, 0.75);




            // letra n
            const NGesture = new fp.GestureDescription('n')

            // Dedo índice
            NGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.9);
            NGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 0.75);

            // Dedo medio
            NGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.9);
            NGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalDown, 0.75);


            // letra p
            const PGesture = new fp.GestureDescription('p')

            // Dedo índice
            PGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.9);
            PGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 0.65);

            // Dedo medio
            PGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 0.9);
            PGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 0.75);


            // letra q
            const QGesture = new fp.GestureDescription('q')

            // Dedo índice
            QGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.9);
            QGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 0.85);

            // Dedo pulgar
            QGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.9);
            QGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 0.85);


            // letra r
            const RGesture = new fp.GestureDescription('r')

            // Dedo índice
            RGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.9);
            RGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.65);

            // Dedo medio
            RGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 0.65);
            RGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.65);

            // letra s

            const SGesture = new fp.GestureDescription('s')

            // Dedo pulgar
            SGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.9);
            SGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.75);

            // Dedo índice
            SGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
            SGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo medio
            SGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
            SGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo anular
            SGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
            SGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo meñique
            SGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
            SGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.75);

            // letra t

            const TGesture = new fp.GestureDescription('t')

            // Dedo pulgar
            TGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.9);
            TGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.75);

            // Dedo índice
            TGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 0.9);
            TGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.75);

            // letra v

            const VGesture = new fp.GestureDescription('v')

            // Dedo medio
            VGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.9);
            VGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.75);

            // Dedo índice
            VGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.9);
            VGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.75);

            // letra w

            const WGesture = new fp.GestureDescription('w')

            // Dedo medio
            WGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 0.9)
            WGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.9);

            // Dedo índice
            WGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 0.9);
            WGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.85);

            // Dedo anular
            WGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 0.9);
            WGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.85);

            // letra x

            const XGesture = new fp.GestureDescription('x')

            // Dedo índice
            XGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 0.9);
            XGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.85);

            // letra y

            const YGesture = new fp.GestureDescription('y')

            // Dedo meñique
            YGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
            YGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.75);

            // Dedo pulgar
            YGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
            YGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.65);

            // Dedo índice
            YGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
            YGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 0.85);

            // Check if we are detecting something

            if (hand.length > 0) {
                const GE = new fp.GestureEstimator([
                    // fp.Gestures.VictoryGesture,
                    // fp.Gestures.ThumbsUpGesture,
                    // PointingGesture,
                    Ok,
                    // Palma,
                    AGesture,
                    EGesture,
                    IGesture,
                    OGesture,
                    UGesture,

                    BGesture,
                    CGesture,
                    DGesture,
                    GGesture,
                    HGesture,
                    KGesture,
                    LGesture,
                    MGesture,
                    NGesture,
                    PGesture,
                    QGesture,
                    RGesture,
                    SGesture,
                    TGesture,
                    VGesture,
                    WGesture,
                    XGesture,
                    YGesture

                ]);
                const gesture = await GE.estimate(hand[0].landmarks, 4);

                if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                    console.log("gesture.gestures", gesture.gestures);

                    const confidence = gesture.gestures.map(
                        (prediction) => prediction.score
                    );

                    const maxConfidence = confidence.indexOf(
                        Math.max.apply(null, confidence)
                    );

                    console.log("gesture.gestures[maxConfidence]", gesture.gestures[maxConfidence]);

                    var letter = gesture.gestures[maxConfidence].name;
                    if (gesture.gestures[maxConfidence].name == "a" && gesture.gestures[maxConfidence].score <= 6) {

                        var letter = "e";
                    }

                    if (gesture.gestures[maxConfidence].name == "d" && gesture.gestures[maxConfidence].confidence < 6) {
                        var letter = "u";
                    }
                    if (gesture.gestures[maxConfidence].name == "ok") {
                        var letter = "f";
                    }
                    console.log("letter", letter);
                    console.log("word", wordRef.current);
                    console.log("gesture.gestures[maxConfidence].score", gesture.gestures[maxConfidence].score);

                    if (letter == wordRef.current) {
                        // i want to change the word and update the image and the div

                        // wordRef.current = word;
                        // setWord(word);
                        selectRandomWord();

                        alert("palabra correcta");
                    }

                }
            }

            // Draw mesh
            const ctx = canvasRef.current.getContext("2d");
            drawHand(hand, ctx);
        }
    };

    useEffect(() => { runCoco() }, []);


    return (
        <div className="All-Juego-jsx">
            <div className="Menu">
                <Menu6 />
            </div>
            <div className="Juego">

                <div className="Container">

                    <div className="ImageContainer">
                        <img src={`src/assets/${word}.png`} alt="Image" className="seña-img" />
                    </div>
                    <div className="WordContainer">
                        <h1>{word}</h1>
                    </div>
                </div>

                <div className="Camera">
                    <Webcam
                        ref={webcamRef}
                        muted={true}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            // left: 0,
                            // right: 0,
                            // textAlign: "center",
                            // zindex: 9,
                            width: 640,
                            height: 480,
                        }}
                    />

                    <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            // left: 0,
                            // right: 0,
                            // textAlign: "center",
                            // zindex: 8,
                            width: 640,
                            height: 480,
                        }}
                    />

                </div>


            </div>

        </div>
    );
}