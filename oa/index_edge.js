/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'inicio-bg',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '601px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"inicio-bg.svg",'0px','0px']
                        },
                        {
                            id: 'inicio-titulo',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '791px', '560px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"inicio-titulo.svg",'0px','0px']
                        },
                        {
                            id: 'logo-SENA-1',
                            display: 'none',
                            type: 'image',
                            rect: ['946px', '170px', '266px', '259px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"logo-SENA-1.svg",'0px','0px']
                        },
                        {
                            id: 'btn-intro',
                            display: 'none',
                            type: 'image',
                            rect: ['965px', '478px', '228px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"btn_intro.svg",'0px','0px'],
                            userClass: "btn-intro"
                        },
                        {
                            id: 'tm-breadcrumb',
                            symbolName: 'tm-breadcrumb',
                            display: 'none',
                            type: 'rect',
                            rect: ['233', '-40px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'intro-mc',
                            symbolName: 'intro-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['226px', '607px', '511', '65', 'auto', 'auto']
                        },
                        {
                            id: 'cs-mc',
                            symbolName: 'cs-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['222', '609px', '502', '58', 'auto', 'auto']
                        },
                        {
                            id: 'mc-mc',
                            symbolName: 'mc-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['222', '602px', '497', '66', 'auto', 'auto']
                        },
                        {
                            id: 'mp-mc',
                            symbolName: 'mp-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['222', '601px', '510', '69', 'auto', 'auto']
                        },
                        {
                            id: 'mm-mc',
                            symbolName: 'mm-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '0px', '233', '600', 'auto', 'auto']
                        },
                        {
                            id: 'opciones-mc',
                            symbolName: 'opciones-mc',
                            display: 'none',
                            type: 'rect',
                            rect: ['1280px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'popups-mc',
                            symbolName: 'popups-mc',
                            type: 'rect',
                            rect: ['0', '0', '25', '25', 'auto', 'auto']
                        },
                        {
                            id: 'titulo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['290', '623', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"titulo.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6800,
                    autoPlay: true,
                    labels: {
                        "puntos": 1750,
                        "intro": 2000,
                        "cs": 3000,
                        "mc": 4000,
                        "mp": 5000
                    },
                    data: [
                        [
                            "eid25",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${inicio-bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${inicio-bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid113",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${mc-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid114",
                            "display",
                            4800,
                            0,
                            "linear",
                            "${mc-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${opciones-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "display",
                            250,
                            0,
                            "linear",
                            "${inicio-titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${inicio-titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid24",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${logo-SENA-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${intro-mc}",
                            '226px',
                            '226px'
                        ],
                        [
                            "eid27",
                            "display",
                            500,
                            0,
                            "linear",
                            "${logo-SENA-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid35",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${logo-SENA-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${opciones-mc}",
                            '1280px',
                            '1240px'
                        ],
                        [
                            "eid1",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${mm-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "top",
                            5000,
                            750,
                            "linear",
                            "${mp-mc}",
                            '601px',
                            '58px'
                        ],
                        [
                            "eid74",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${cs-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            3800,
                            0,
                            "linear",
                            "${cs-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "top",
                            4000,
                            750,
                            "linear",
                            "${mc-mc}",
                            '602px',
                            '58px'
                        ],
                        [
                            "eid23",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${btn-intro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid70",
                            "top",
                            2000,
                            750,
                            "linear",
                            "${intro-mc}",
                            '607px',
                            '58px'
                        ],
                        [
                            "eid303",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${mp-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid304",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${mp-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${tm-breadcrumb}",
                            '-40px',
                            '0px'
                        ],
                        [
                            "eid2",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${mm-mc}",
                            '-233px',
                            '0px'
                        ],
                        [
                            "eid73",
                            "top",
                            3000,
                            750,
                            "linear",
                            "${cs-mc}",
                            '609px',
                            '58px'
                        ],
                        [
                            "eid26",
                            "display",
                            750,
                            0,
                            "linear",
                            "${btn-intro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${btn-intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid33",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${logo-SENA-1}",
                            '946px',
                            '-338px'
                        ],
                        [
                            "eid68",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${intro-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid71",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${intro-mc}",
                            'block',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${tm-breadcrumb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid32",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${btn-intro}",
                            '965px',
                            '1293px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${inicio-titulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${inicio-titulo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid42",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${inicio-bg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${logo-SENA-1}",
                            '170px',
                            '170px'
                        ]
                    ]
                }
            },
            "mm-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'mm-bg',
                            type: 'image',
                            rect: ['0px', '0px', '233px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mm-bg.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '374px', '233px', '54px', 'auto', 'auto'],
                            id: 'mm_mp',
                            userClass: 'mm-mp',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_mp.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '374px', '233px', '54px', 'auto', 'auto'],
                            id: 'mm_mp-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_mp-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '308px', '233px', '54px', 'auto', 'auto'],
                            id: 'mm_mc',
                            userClass: 'mm-mc',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_mc.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '308px', '233px', '54px', 'auto', 'auto'],
                            id: 'mm_mc-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_mc-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '245px', '233px', '53px', 'auto', 'auto'],
                            id: 'mm_cs',
                            userClass: 'mm-cs',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_cs.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '245px', '233px', '53px', 'auto', 'auto'],
                            id: 'mm_cs-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_cs-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '181px', '233px', '53px', 'auto', 'auto'],
                            id: 'mm_intro',
                            userClass: 'mm-intro',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mm_intro.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '181px', '233px', '53px', 'auto', 'auto'],
                            id: 'mm_intro-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mm_intro-a.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '233px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "intro": 1000,
                        "cs": 1250,
                        "mc": 1500,
                        "mp": 1750
                    },
                    data: [
                        [
                            "eid56",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${mm_cs-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid57",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${mm_cs-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${mm_mp-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            1950,
                            0,
                            "linear",
                            "${mm_mp-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            1450,
                            0,
                            "linear",
                            "${mm_mc-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${mm_mc-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            950,
                            0,
                            "linear",
                            "${mm_intro-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${mm_intro-a}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "opciones-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['-1240px', '0px', '1280px', '600px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle',
                            opacity: '0',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            userClass: 'op-trigger',
                            rect: ['0px', '0px', '40px', '600px', 'auto', 'auto'],
                            display: 'block',
                            id: 'op_op-trigger',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/op_op-trigger.svg', '0px', '0px']
                        },
                        {
                            userClass: 'op-trigger',
                            rect: ['-502px', '0', '40px', '600px', 'auto', 'auto'],
                            display: 'none',
                            id: 'op_op-trigger-a',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/op_op-trigger-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['51px', '497px', '478px', '93px', 'auto', 'auto'],
                            id: 'opciones_cc',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_cc.svg', '0px', '0px']
                        },
                        {
                            rect: ['50px', '178px', '480px', '309px', 'auto', 'auto'],
                            id: 'opciones_creditos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_creditos.svg', '0px', '0px']
                        },
                        {
                            rect: ['374px', '95px', '156px', '75px', 'auto', 'auto'],
                            id: 'opciones_oa',
                            userClass: 'op-oa',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_oa.svg', '0px', '0px']
                        },
                        {
                            rect: ['212px', '95px', '156px', '75px', 'auto', 'auto'],
                            id: 'opciones_pdf',
                            userClass: 'op-pdf',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_pdf.svg', '0px', '0px']
                        },
                        {
                            rect: ['51px', '95px', '155px', '75px', 'auto', 'auto'],
                            id: 'opciones_bibliografia',
                            userClass: 'op-bi',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_bibliografia.svg', '0px', '0px']
                        },
                        {
                            rect: ['374px', '13px', '156px', '75px', 'auto', 'auto'],
                            id: 'opciones_glosario',
                            userClass: 'op-glo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_glosario.svg', '0px', '0px']
                        },
                        {
                            rect: ['212px', '13px', '156px', '75px', 'auto', 'auto'],
                            id: 'opciones_ad',
                            userClass: 'op-ad',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_ad.svg', '0px', '0px']
                        },
                        {
                            rect: ['51px', '13px', '155px', '75px', 'auto', 'auto'],
                            id: 'opciones_mapa',
                            userClass: 'op-map',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/opciones_mapa.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3862",
                            "display",
                            200,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3856",
                            "left",
                            900,
                            100,
                            "linear",
                            "${opciones_cc}",
                            '51px',
                            '-451px'
                        ],
                        [
                            "eid3833",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${op_op-trigger}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3855",
                            "left",
                            0,
                            200,
                            "linear",
                            "${op_op-trigger}",
                            '0px',
                            '-502px'
                        ],
                        [
                            "eid3831",
                            "opacity",
                            200,
                            800,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3834",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${op_op-trigger-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3860",
                            "left",
                            200,
                            100,
                            "linear",
                            "${opciones_mapa}",
                            '51px',
                            '-451px'
                        ],
                        [
                            "eid3859",
                            "left",
                            300,
                            100,
                            "linear",
                            "${opciones_ad}",
                            '212px',
                            '-290px'
                        ],
                        [
                            "eid3853",
                            "left",
                            800,
                            100,
                            "linear",
                            "${opciones_creditos}",
                            '50px',
                            '-452px'
                        ],
                        [
                            "eid3857",
                            "left",
                            500,
                            100,
                            "linear",
                            "${opciones_bibliografia}",
                            '51px',
                            '-451px'
                        ],
                        [
                            "eid3854",
                            "left",
                            400,
                            100,
                            "linear",
                            "${opciones_glosario}",
                            '374px',
                            '-128px'
                        ],
                        [
                            "eid3861",
                            "left",
                            600,
                            100,
                            "linear",
                            "${opciones_pdf}",
                            '212px',
                            '-290px'
                        ],
                        [
                            "eid3858",
                            "left",
                            700,
                            100,
                            "linear",
                            "${opciones_oa}",
                            '374px',
                            '-128px'
                        ]
                    ]
                }
            },
            "tm-breadcrumb": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'breadcrumb-bar',
                            type: 'image',
                            rect: ['40px', '0px', '967px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/breadcrumb-bar.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '40px', '40px', 'auto', 'auto'],
                            id: 'btn-home',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn-home.svg', '0px', '0px']
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['54px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify',
                            id: 'inicio',
                            text: '<p style=\"margin: 0px;\">Inicio &gt;</p>',
                            cursor: 'pointer',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'intro',
                            text: '<p style=\"margin: 0px;\">Introducción</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify'
                        },
                        {
                            type: 'text',
                            id: 'cs',
                            text: '<p style=\"margin: 0px;\">Calidad de Software</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify'
                        },
                        {
                            type: 'text',
                            id: 'mc',
                            text: '<p style=\"margin: 0px;\">Modelos de calidad</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify'
                        },
                        {
                            type: 'text',
                            id: 'mp',
                            text: '<p style=\"margin: 0px;\">Mejora del proceso</p>',
                            cursor: 'pointer',
                            rect: ['105px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'justify'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1007px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1112,
                    autoPlay: true,
                    labels: {
                        "puntos": 0,
                        "intro": 250,
                        "cs": 500,
                        "mc": 750,
                        "mp": 1000
                    },
                    data: [
                        [
                            "eid3741",
                            "display",
                            411,
                            0,
                            "linear",
                            "${cs}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3742",
                            "display",
                            631,
                            0,
                            "linear",
                            "${cs}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3737",
                            "display",
                            197,
                            0,
                            "linear",
                            "${intro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3738",
                            "display",
                            411,
                            0,
                            "linear",
                            "${intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3743",
                            "display",
                            851,
                            0,
                            "linear",
                            "${mp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3744",
                            "display",
                            1112,
                            0,
                            "linear",
                            "${mp}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3739",
                            "display",
                            631,
                            0,
                            "linear",
                            "${mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3740",
                            "display",
                            851,
                            0,
                            "linear",
                            "${mc}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "intro-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'intro-titulo',
                            rect: ['0px', '0px', '511px', '65px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro-titulo.svg', '0px', '0px']
                        },
                        {
                            rect: ['-706px', '107px', '470px', '258px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Los modelos de calidad son herramientas que guían a las organizaciones a la mejora continua y a la competitividad dándoles especificaciones de los requisitos que deben de cumplir para poder brindar productos y servicios de alto nivel. Un modelo de calidad de software es un conjunto de buenas prácticas para el ciclo de vida del software enfocadas tanto en el proceso como en el producto de software.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Construir un modelo de calidad es bastante complejo y es usual que estos modelos descompongan las características de calidad del producto software y que estas características se usen para determinar los ítems de una lista de comprobación de la misma.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">A continuación se dan a conocer algunos de los modelos de gestión de la calidad en el desarrollo de software que se pueden implementar tanto a nivel de empresas desarrolladoras de software como a nivel de equipos de desarrollo y desarrolladores individuales.</p>',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'p1-no-face',
                            rect: ['1111px', '-67px', '454px', '605px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/p1-no-face.svg', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/intro.mp3'],
                            id: 'intro',
                            rect: ['1163px', '420px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '511px', '65px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid66",
                            "left",
                            250,
                            250,
                            "linear",
                            "${Text}",
                            '-706px',
                            '41px'
                        ],
                        [
                            "eid425",
                            "left",
                            750,
                            250,
                            "linear",
                            "${intro}",
                            '1163px',
                            '116px'
                        ],
                        [
                            "eid52",
                            "left",
                            500,
                            250,
                            "linear",
                            "${p1-no-face}",
                            '1111px',
                            '534px'
                        ],
                        [
                            "eid422",
                            "display",
                            750,
                            0,
                            "linear",
                            "${intro}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "cs-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cs-titulo',
                            type: 'image',
                            rect: ['0px', '0px', '502px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cs-titulo.svg', '0px', '0px']
                        },
                        {
                            rect: ['40px', '90px', '470px', '385px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​Actualmente la calidad tanto del proceso como de los productos de software se ha convertido en uno de los principales desafíos que tiene que afrontar la ingeniería del software. Tanto la industria del software como la academia y organismos internacionales han venido realizando una gran cantidad de esfuerzos sobre cómo lograr software de calidad y cómo evaluarlo.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La calidad de acuerdo a la Real Academia Española es: “Propiedad o conjunto de propiedades inherentes a una cosa, que permiten apreciarla como igual, mejor o peor que las restantes de su especie”</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La calidad del software según la IEEE es: “Grado con el cual el cliente o usuario percibe que el software satisface sus expectativas”.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La calidad del software según la ISO es: “El conjunto de características de una entidad que le confieren su aptitud para satisfacer las necesidades expresadas y las implícitas”.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">En síntesis la calidad del software es el conjunto de cualidades medibles y específicas que varía de un sistema a otro, dependiendo del tipo de software que se va a desarrollar, para determinar su utilidad e idoneidad. Este desarrollo debe ser confiable, mantenible y flexible para disminuir los costos de mantenimiento y perfeccionamiento durante el tiempo de utilización y durante las etapas del ciclo de vida del software.</p>',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            id: 'cs-ill1',
                            type: 'image',
                            rect: ['560px', '119px', '432px', '325px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cs-ill1.svg', '0px', '0px']
                        },
                        {
                            id: 'clic-mas-info',
                            type: 'image',
                            rect: ['729px', '307px', '94px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/clic-mas-info.svg', '0px', '0px']
                        },
                        {
                            rect: ['679px', '244px', '194px', '54px', 'auto', 'auto'],
                            id: 'cs-mcm-but',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cs-mcm-but.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '502px', '58px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "popups-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            userClass: '',
                            overflow: 'hidden',
                            display: 'none',
                            rect: ['0px', '0px', '0px', '0px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.85)'],
                            c: [
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['32px', '25px', '1216px', '508px', 'auto', 'auto'],
                                id: 'cs-mcm',
                                fill: ['rgba(0,0,0,0)', 'images/cs-mcm.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['-1224px', '24px', '1213px', '463px', 'auto', 'auto'],
                                id: 'mc-m15504-edn',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m15504-edn.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['1284px', '25px', '1203px', '490px', 'auto', 'auto'],
                                id: 'mc-m15504-edn-2',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m15504-edn-2.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'btn-ver-grafica2',
                                display: 'none',
                                rect: ['1440px', '376px', '257px', '77px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/btn-ver-grafica.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['1289px', '25px', '861px', '450px', 'auto', 'auto'],
                                id: 'mc-m15504-edn-3',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m15504-edn-3.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['50px', '21px', '973px', '565px', 'auto', 'auto'],
                                id: 'mc-m15504-2-img1',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m15504-2-img1.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'mc-m15504-2-img2',
                                display: 'none',
                                rect: ['642px', '154px', '614px', '292px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-m15504-2-img2.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['100px', '25px', '1040px', '528px', 'auto', 'auto'],
                                id: 'mc-m25000-img1',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'mc-m25000-img1-but_funcionalidad',
                                display: 'none',
                                rect: ['118px', '274px', '157px', '42px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_funcionalidad.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'mc-m25000-img1-but_confiabilidad',
                                display: 'none',
                                rect: ['295px', '346px', '157px', '42px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_confiabilidad.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'mc-m25000-img1-but_usabilidad',
                                display: 'none',
                                rect: ['471px', '450px', '157px', '42px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_usabilidad.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'mc-m25000-img1-but_eficiencia',
                                display: 'none',
                                rect: ['652px', '526px', '157px', '42px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_eficiencia.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'mc-m25000-img1-but_mantenibilidad',
                                display: 'none',
                                rect: ['827px', '450px', '157px', '42px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_mantenibilidad.svg', '0px', '0px']
                            },
                            {
                                userClass: 'size-opacity',
                                type: 'image',
                                id: 'mc-m25000-img1-but_portabilidad',
                                display: 'none',
                                rect: ['1006px', '25px', '157px', '42px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_portabilidad.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['118px', '25', '157px', '42px', 'auto', 'auto'],
                                id: 'mc-m25000-img1-but_funcionalidad-a',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_funcionalidad-a.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['295px', '25', '157px', '42px', 'auto', 'auto'],
                                id: 'mc-m25000-img1-but_confiabilidad-a',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_confiabilidad-a.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['471px', '25', '157px', '42px', 'auto', 'auto'],
                                id: 'mc-m25000-img1-but_usabilidad-a',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_usabilidad-a.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['652px', '25', '157px', '42px', 'auto', 'auto'],
                                id: 'mc-m25000-img1-but_eficiencia-a',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_eficiencia-a.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['827px', '25', '157px', '42px', 'auto', 'auto'],
                                id: 'mc-m25000-img1-but_mantenibilidad-a',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_mantenibilidad-a.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['1006px', '25', '157px', '42px', 'auto', 'auto'],
                                id: 'mc-m25000-img1-but_portabilidad-a',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-img1-but_portabilidad-a.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['28px', '67px', '1224px', '491px', 'auto', 'auto'],
                                id: 'mc-m25000-funcionalidad',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-funcionalidad.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['28px', '66px', '1224px', '491px', 'auto', 'auto'],
                                id: 'mc-25000-confiabilidad',
                                fill: ['rgba(0,0,0,0)', 'images/mc-25000-confiabilidad.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['28px', '65px', '1224px', '491px', 'auto', 'auto'],
                                id: 'mc-m25000-usabilidad',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-usabilidad.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['28px', '67px', '1224px', '491px', 'auto', 'auto'],
                                id: 'mc-m25000-eficiencia',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-eficiencia.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['28px', '67px', '1224px', '491px', 'auto', 'auto'],
                                id: 'mc-m25000-mantenibilidad',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-mantenibilidad.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['28px', '65px', '1224px', '492px', 'auto', 'auto'],
                                id: 'mc-m25000-portabilidad',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-portabilidad.svg', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['148px', '36px', '984px', '527px', 'auto', 'auto'],
                                id: 'mp-img1',
                                fill: ['rgba(0,0,0,0)', 'images/mp-img1.svg', '0px', '0px']
                            },
                            {
                                type: 'group',
                                display: 'none',
                                id: 'pagination',
                                rect: ['595px', '554px', '90', '28', 'auto', 'auto'],
                                c: [
                                {
                                    rect: ['0px', '0px', '90px', '28px', 'auto', 'auto'],
                                    id: 'pagination-w_indicator',
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/pagination-w_indicator.svg', '0px', '0px']
                                },
                                {
                                    userClass: 'fw-w',
                                    id: 'pagination-w_fw',
                                    type: 'image',
                                    rect: ['80px', '0px', '23px', '28px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/pagination-w_fw.svg', '0px', '0px']
                                },
                                {
                                    userClass: 'bw-w',
                                    id: 'pagination-w_bw',
                                    type: 'image',
                                    rect: ['-13px', '0px', '23px', '28px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/pagination-w_bw.svg', '0px', '0px']
                                },
                                {
                                    type: 'text',
                                    id: '_1de3',
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                    display: 'block',
                                    rect: ['24px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                    text: '<p style=\"margin: 0px; text-align: center;\">​1 de 3</p>',
                                    align: 'center'
                                },
                                {
                                    type: 'text',
                                    id: '_2de3',
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                    display: 'none',
                                    rect: ['24px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                    text: '<p style=\"margin: 0px; text-align: center;\">​2 de 3</p>',
                                    align: 'center'
                                },
                                {
                                    type: 'text',
                                    id: '_3de3',
                                    textStyle: ['', '', '', '', 'none'],
                                    font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                    display: 'none',
                                    rect: ['24px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                    text: '<p style=\"margin: 0px; text-align: center;\">3 de 3</p>',
                                    align: 'center'
                                }]
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['967px', '384px', '79px', '75px', 'auto', 'auto'],
                                id: 'clic-mas-info-amin',
                                fill: ['rgba(0,0,0,0)', 'images/clic-mas-info-amin.gif', '0px', '0px']
                            }]
                        },
                        {
                            userClass: 'size-opacity',
                            type: 'image',
                            id: 'btn-cerrar-popup',
                            display: 'none',
                            rect: ['1280px', '-28px', '28px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-popup.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(172,80,49,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Regresar =&gt;</p>',
                            display: 'none',
                            rect: ['1080px', '25px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '25px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 6800,
                    autoPlay: true,
                    labels: {
                        "cs-mcm": 250,
                        "mc-m15504-edn": 1250,
                        "mc-m25000-img1": 3250,
                        "funcionalidad": 4500,
                        "confiabilidad": 4750,
                        "usabilidad": 5000,
                        "eficiencia": 5250,
                        "mantenibilidad": 5500,
                        "portabilidad": 5750,
                        "mp-img1": 6000
                    },
                    data: [
                        [
                            "eid257",
                            "left",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_usabilidad}",
                            '1050px',
                            '471px'
                        ],
                        [
                            "eid82",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "display",
                            3050,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid228",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid229",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid335",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid336",
                            "display",
                            6800,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid216",
                            "width",
                            2750,
                            250,
                            "linear",
                            "${mc-m15504-2-img2}",
                            '614px',
                            '1157px'
                        ],
                        [
                            "eid289",
                            "display",
                            5200,
                            0,
                            "linear",
                            "${mc-m25000-eficiencia}",
                            'none',
                            'block'
                        ],
                        [
                            "eid291",
                            "display",
                            5450,
                            0,
                            "linear",
                            "${mc-m25000-eficiencia}",
                            'block',
                            'none'
                        ],
                        [
                            "eid290",
                            "display",
                            5200,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_eficiencia-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid292",
                            "display",
                            5450,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_eficiencia-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid235",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_mantenibilidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid340",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_mantenibilidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid188",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${mc-m15504-edn}",
                            '35px',
                            '-1224px'
                        ],
                        [
                            "eid217",
                            "left",
                            2750,
                            250,
                            "linear",
                            "${mc-m15504-2-img2}",
                            '642px',
                            '54px'
                        ],
                        [
                            "eid80",
                            "width",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid164",
                            "width",
                            1250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid176",
                            "width",
                            2250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid180",
                            "width",
                            2500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid184",
                            "width",
                            2750,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid221",
                            "width",
                            3000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid231",
                            "width",
                            3250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid347",
                            "width",
                            4250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid353",
                            "width",
                            4400,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid338",
                            "width",
                            6000,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1280px'
                        ],
                        [
                            "eid294",
                            "display",
                            5450,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_mantenibilidad-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid296",
                            "display",
                            5700,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_mantenibilidad-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid298",
                            "display",
                            5700,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_portabilidad-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_portabilidad-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid208",
                            "left",
                            2755,
                            0,
                            "linear",
                            "${mc-m15504-2-img1}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid264",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_mantenibilidad}",
                            '450px',
                            '25px'
                        ],
                        [
                            "eid282",
                            "display",
                            4700,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_confiabilidad-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            4950,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_confiabilidad-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid236",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_portabilidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid339",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_portabilidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid278",
                            "display",
                            4450,
                            0,
                            "linear",
                            "${mc-m25000-funcionalidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid280",
                            "display",
                            4700,
                            0,
                            "linear",
                            "${mc-m25000-funcionalidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${mc-m15504-edn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${mc-m15504-edn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid232",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_confiabilidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid343",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_confiabilidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid254",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_funcionalidad}",
                            '274px',
                            '25px'
                        ],
                        [
                            "eid237",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_usabilidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid342",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_usabilidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2de3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${_2de3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid172",
                            "display",
                            2450,
                            0,
                            "linear",
                            "${_2de3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid277",
                            "display",
                            4450,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_funcionalidad-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid279",
                            "display",
                            4700,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_funcionalidad-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            250,
                            0,
                            "linear",
                            "${cs-mcm}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${cs-mcm}",
                            'block',
                            'none'
                        ],
                        [
                            "eid286",
                            "display",
                            4950,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_usabilidad-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid288",
                            "display",
                            5200,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_usabilidad-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid259",
                            "left",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_portabilidad}",
                            '806px',
                            '1006px'
                        ],
                        [
                            "eid206",
                            "display",
                            2700,
                            0,
                            "linear",
                            "${mc-m15504-2-img1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid207",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${mc-m15504-2-img1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid233",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_eficiencia}",
                            'none',
                            'block'
                        ],
                        [
                            "eid341",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_eficiencia}",
                            'block',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            4950,
                            0,
                            "linear",
                            "${mc-m25000-usabilidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid287",
                            "display",
                            5200,
                            0,
                            "linear",
                            "${mc-m25000-usabilidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid261",
                            "left",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_eficiencia}",
                            '928px',
                            '652px'
                        ],
                        [
                            "eid262",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_eficiencia}",
                            '526px',
                            '25px'
                        ],
                        [
                            "eid210",
                            "display",
                            2700,
                            0,
                            "linear",
                            "${mc-m15504-2-img2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid223",
                            "display",
                            3050,
                            0,
                            "linear",
                            "${mc-m15504-2-img2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            3050,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid224",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid225",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid331",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'none',
                            'block'
                        ],
                        [
                            "eid332",
                            "display",
                            6800,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "left",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1227px'
                        ],
                        [
                            "eid159",
                            "left",
                            1250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1227px'
                        ],
                        [
                            "eid174",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1227px',
                            '1227px'
                        ],
                        [
                            "eid178",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1227px',
                            '1227px'
                        ],
                        [
                            "eid182",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1227px',
                            '1227px'
                        ],
                        [
                            "eid219",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1227px',
                            '1227px'
                        ],
                        [
                            "eid226",
                            "left",
                            3250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1227px'
                        ],
                        [
                            "eid349",
                            "left",
                            4250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1227px',
                            '1227px'
                        ],
                        [
                            "eid351",
                            "left",
                            4400,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1227px',
                            '1227px'
                        ],
                        [
                            "eid333",
                            "left",
                            6000,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '1280px',
                            '1227px'
                        ],
                        [
                            "eid258",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_usabilidad}",
                            '450px',
                            '25px'
                        ],
                        [
                            "eid81",
                            "height",
                            250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid163",
                            "height",
                            1250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid177",
                            "height",
                            2250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid181",
                            "height",
                            2500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid185",
                            "height",
                            2750,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid222",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid230",
                            "height",
                            3250,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid348",
                            "height",
                            4250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid354",
                            "height",
                            4400,
                            0,
                            "linear",
                            "${Rectangle}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid337",
                            "height",
                            6000,
                            750,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '600px'
                        ],
                        [
                            "eid169",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3de3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            2450,
                            0,
                            "linear",
                            "${_3de3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid196",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${mc-m15504-edn-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid200",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${mc-m15504-edn-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid234",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_funcionalidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid344",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${mc-m25000-img1-but_funcionalidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid194",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${mc-m15504-edn-2}",
                            '1284px',
                            '38px'
                        ],
                        [
                            "eid198",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${mc-m15504-edn-2}",
                            '38px',
                            '-1208px'
                        ],
                        [
                            "eid170",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${_1de3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid202",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${mc-m15504-edn-3}",
                            '1289px',
                            '209px'
                        ],
                        [
                            "eid281",
                            "display",
                            4700,
                            0,
                            "linear",
                            "${mc-25000-confiabilidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid283",
                            "display",
                            4950,
                            0,
                            "linear",
                            "${mc-25000-confiabilidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid293",
                            "display",
                            5450,
                            0,
                            "linear",
                            "${mc-m25000-mantenibilidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid295",
                            "display",
                            5700,
                            0,
                            "linear",
                            "${mc-m25000-mantenibilidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid215",
                            "height",
                            2750,
                            250,
                            "linear",
                            "${mc-m15504-2-img2}",
                            '292px',
                            '550px'
                        ],
                        [
                            "eid87",
                            "top",
                            250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '25px'
                        ],
                        [
                            "eid160",
                            "top",
                            1250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '25px'
                        ],
                        [
                            "eid175",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid179",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid183",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid220",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid227",
                            "top",
                            3250,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '25px'
                        ],
                        [
                            "eid350",
                            "top",
                            4250,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid352",
                            "top",
                            4400,
                            0,
                            "linear",
                            "${btn-cerrar-popup}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid334",
                            "top",
                            6000,
                            750,
                            "linear",
                            "${btn-cerrar-popup}",
                            '-28px',
                            '25px'
                        ],
                        [
                            "eid253",
                            "left",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_funcionalidad}",
                            '928px',
                            '118px'
                        ],
                        [
                            "eid167",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid205",
                            "display",
                            2700,
                            0,
                            "linear",
                            "${pagination}",
                            'block',
                            'none'
                        ],
                        [
                            "eid256",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_confiabilidad}",
                            '346px',
                            '25px'
                        ],
                        [
                            "eid238",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${mc-m25000-img1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid239",
                            "display",
                            4050,
                            0,
                            "linear",
                            "${mc-m25000-img1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid345",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${mp-img1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid346",
                            "display",
                            6800,
                            0,
                            "linear",
                            "${mp-img1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid297",
                            "display",
                            5700,
                            0,
                            "linear",
                            "${mc-m25000-portabilidad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid299",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${mc-m25000-portabilidad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid260",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_portabilidad}",
                            '346px',
                            '25px'
                        ],
                        [
                            "eid203",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${mc-m15504-edn-3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid204",
                            "display",
                            2700,
                            0,
                            "linear",
                            "${mc-m15504-edn-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid426",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${clic-mas-info-amin}",
                            'none',
                            'block'
                        ],
                        [
                            "eid427",
                            "display",
                            4050,
                            0,
                            "linear",
                            "${clic-mas-info-amin}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${btn-ver-grafica2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid199",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${btn-ver-grafica2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid255",
                            "left",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_confiabilidad}",
                            '1050px',
                            '295px'
                        ],
                        [
                            "eid263",
                            "left",
                            4000,
                            250,
                            "linear",
                            "${mc-m25000-img1-but_mantenibilidad}",
                            '806px',
                            '827px'
                        ],
                        [
                            "eid193",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${btn-ver-grafica2}",
                            '1440px',
                            '194px'
                        ],
                        [
                            "eid197",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${btn-ver-grafica2}",
                            '194px',
                            '-1052px'
                        ],
                        [
                            "eid3",
                            "display",
                            2135,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4",
                            "display",
                            3050,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            4128,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "display",
                            5800,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid218",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${mc-m15504-2-img2}",
                            '154px',
                            '25px'
                        ]
                    ]
                }
            },
            "mc-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'mc-titulo',
                            type: 'image',
                            rect: ['0px', '0px', '497px', '66px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mc-titulo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            opacity: '1',
                            rect: ['-702px', '90px', '470px', '57px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'justify',
                            text: '<p style=\"margin: 0px;\">​Para estandarizar las buenas prácticas de calidad en la industria en general y en la industria del software en particular se ha propuesto los siguientes modelos de calidad.</p>'
                        },
                        {
                            rect: ['-986px', '160px', '748px', '290px', 'auto', 'auto'],
                            type: 'image',
                            id: 'mc-ill1',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mc-ill1.svg', '0px', '0px']
                        },
                        {
                            rect: ['1062px', '137px', '326px', '405px', 'auto', 'auto'],
                            type: 'image',
                            id: 'p2-no-face',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/p2-no-face.svg', '0px', '0px']
                        },
                        {
                            rect: ['1068px', '90', '513', '26', 'auto', 'auto'],
                            id: 'mcmmi',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'mc-mcmmi-titulo',
                                type: 'image',
                                rect: ['0px', '0px', '513px', '26px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-mcmmi-titulo.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '40px', '650px', '309px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​El modelo CMM visto en el capítulo anterior fue aplicado inicialmente al proceso del software y específicamente su nombre es CMM-SW. Sin embargo en el desarrollo de software existen otros procesos importantes como el proceso de pruebas, el proceso de subcontratación, entre otros, que también requieren ser evaluados.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Es así como aparece el CMMI o Capability Maturity Model Integration que usa el mismo marco conceptual o framework CMM pero aplicado a las siguientes áreas:</p><p style=\"margin: 0px;\">​</p><ul><li>Desarrollo de software.&nbsp;</li><li>Ingeniería de sistemas.</li><li>Desarrollo integrado de productos.</li><li>Alianza de la industria electrónica.</li><li>Adquisición de software.</li><li>Recursos humanos.</li></ul><p style=\"margin: 0px;\">Es importante mencionar que igual que las normas ISO este modelo indica qué se debe hacer pero no cómo hay que hacerlo, es decir, es un marco conceptual pero no una metodología.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La evolución de los estándares CMM se pueden apreciar en la siguiente figura:</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                id: 'mc-mcmmi-img',
                                type: 'image',
                                rect: ['1026px', '-11px', '565px', '401px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-mcmmi-img.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1068px', '90', '310', '26', 'auto', 'auto'],
                            id: 'm15504',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'm15504-titulo',
                                type: 'image',
                                rect: ['0px', '0px', '310px', '26px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/m15504-titulo.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '36px', '650px', '178px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text4',
                                text: '<p style=\"margin: 0px;\">​El ISO/IEC 15504, también conocido como “Software Process Improvement Capability Determinación”, abreviado SPICE, en español, “Determinación de la Capacidad de Mejora del Proceso de Software” es un modelo para la mejora y evaluación de los procesos de desarrollo y mantenimiento de sistemas de información y productos de software.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La norma ISO 15504 SPICE es una norma abierta e internacional para evaluar y mejorar la capacidad y madurez de los procesos. Junto con la ISO-12207, la norma aplica a la evaluación y mejora de la calidad del proceso de desarrollo y mantenimiento de software.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">A diferencia del CMMI que es una iniciativa de un sólo gobierno la ISO-15504 está avalada por un organismo de certificación internacional.&nbsp;</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                id: 'mc-m15504-butbg',
                                type: 'image',
                                rect: ['36px', '237px', '577px', '149px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-m15504-butbg.svg', '0px', '0px']
                            },
                            {
                                id: 'clic-mas-info',
                                type: 'image',
                                rect: ['278px', '370px', '94px', '31px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/clic-mas-info.svg', '0px', '0px']
                            },
                            {
                                rect: ['200px', '273px', '257px', '77px', 'auto', 'auto'],
                                id: 'mc-m15504-edm-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mc-m15504-edm-but.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1061px', '90', '221', '22', 'auto', 'auto'],
                            id: 'm25000',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'mc-m25000-titulo',
                                type: 'image',
                                rect: ['0px', '0px', '221px', '22px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-titulo.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '38px', '650px', '258px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text5',
                                text: '<p style=\"margin: 0px;\">​La norma ISO/IEC-25000 también llamada “System and Software Quality Requirements and Evaluation (SQuaRE)” es la evolución de la norma ISO/IEC-9126: “Software Product Evaluación”, (Evaluación de los productos de Software) y crean un marco común para evaluar la calidad del software como producto.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El modelo CMMI y el estándar ISO-15504 están enfocados en la mejora del proceso de desarrollo de software. En cambio la norma ISO-25000 está enfocada en la calidad del software como producto.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La norma define 6 características de calidad y describe un modelo de procesos para la evaluación de productos de software (NAIK, 2008).</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El estándar ISO/IEC 25000 define un marco conceptual que considera los siguientes factores:</p><p style=\"margin: 0px;\">​</p><ul><li>Calidad del proceso.</li><li>Calidad del producto software (Calidad interna y externa).</li><li>Calidad en el uso.</li></ul>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                id: 'mc-m25000-butbg',
                                type: 'image',
                                rect: ['104px', '309px', '442px', '123px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mc-m25000-butbg.svg', '0px', '0px']
                            },
                            {
                                id: 'clic-mas-info2',
                                type: 'image',
                                rect: ['278px', '416px', '94px', '31px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/clic-mas-info.svg', '0px', '0px']
                            },
                            {
                                rect: ['209px', '324px', '257px', '77px', 'auto', 'auto'],
                                id: 'btn-ver-grafica',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/btn-ver-grafica.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['321px', '550px', '116', '28', 'auto', 'auto'],
                            id: 'pagination',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'pagination_indicator',
                                type: 'image',
                                rect: ['13px', '0px', '90px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                            },
                            {
                                rect: ['93px', '0px', '23px', '28px', 'auto', 'auto'],
                                id: 'pagination_fw',
                                userClass: 'fw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_fw.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '0px', '23px', '28px', 'auto', 'auto'],
                                id: 'pagination_bw',
                                userClass: 'bw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_bw.svg', '0px', '0px']
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['34px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: '_1de2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 15px; color: rgb(255, 255, 255);\">1 de 2</span></p>',
                                display: 'block',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['34px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: '_2de2',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 700; font-size: 15px; color: rgb(255, 255, 255);\"> </span><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 15px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">2&nbsp;</span><span style=\"font-weight: 700; font-size: 15px; color: rgb(255, 255, 255);\">de 2</span></p>',
                                display: 'none',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['34px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: '_1de3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 15px; color: rgb(255, 255, 255);\">1 de 3</span></p>',
                                display: 'none',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['34px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: '_2de3',
                                text: '<p style=\"margin: 0px;\">2<span style=\"font-weight: 700; font-size: 15px; color: rgb(255, 255, 255);\"> de 3</span></p>',
                                display: 'none',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['34px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'justify',
                                id: '_3de3',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 15px; color: rgb(255, 255, 255);\">3 de 3</span></p>',
                                display: 'none',
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'mc-rsm-mc',
                            rect: ['1122px', '-18', '284', '560', 'auto', 'auto'],
                            id: 'mc-rsm-mc'
                        },
                        {
                            rect: ['517px', '16px', '3px', '41px', 'auto', 'auto'],
                            id: 'separator1',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/separator1.svg', '0px', '0px']
                        },
                        {
                            rect: ['539px', '19px', '28px', '28px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '497px', '66px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    labels: {
                        "mcmmi": 1250,
                        "m15504": 2000,
                        "m25000": 2500
                    },
                    data: [
                        [
                            "eid120",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${p2-no-face}",
                            '1',
                            '0'
                        ],
                        [
                            "eid142",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${mc-mcmmi-titulo}",
                            '0px',
                            '-922px'
                        ],
                        [
                            "eid105",
                            "display",
                            250,
                            0,
                            "linear",
                            "${mc-ill1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid122",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${mc-ill1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid156",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${m25000}",
                            '1061px',
                            '40px'
                        ],
                        [
                            "eid149",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3de3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid110",
                            "left",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            '-702px',
                            '40px'
                        ],
                        [
                            "eid147",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1de3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid152",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${m15504}",
                            '1068px',
                            '40px'
                        ],
                        [
                            "eid103",
                            "display",
                            750,
                            0,
                            "linear",
                            "${mc-rsm-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid150",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${m15504}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "display",
                            2300,
                            0,
                            "linear",
                            "${m15504}",
                            'block',
                            'none'
                        ],
                        [
                            "eid119",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${mc-ill1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid129",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${_2de2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid118",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid126",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${pagination}",
                            '550px',
                            '496px'
                        ],
                        [
                            "eid144",
                            "top",
                            1800,
                            0,
                            "linear",
                            "${pagination}",
                            '496px',
                            '496px'
                        ],
                        [
                            "eid146",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${separator1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid143",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${pagination}",
                            'block',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${btn-cerrar-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "left",
                            250,
                            250,
                            "linear",
                            "${mc-ill1}",
                            '-986px',
                            '-128px'
                        ],
                        [
                            "eid140",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${Text2}",
                            '0px',
                            '-922px'
                        ],
                        [
                            "eid104",
                            "display",
                            500,
                            0,
                            "linear",
                            "${p2-no-face}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${p2-no-face}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "left",
                            1500,
                            250,
                            "linear",
                            "${mc-mcmmi-img}",
                            '1026px',
                            '56px'
                        ],
                        [
                            "eid108",
                            "left",
                            500,
                            250,
                            "linear",
                            "${p2-no-face}",
                            '1062px',
                            '390px'
                        ],
                        [
                            "eid131",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${mcmmi}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${mcmmi}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${m25000}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${mcmmi}",
                            '1068px',
                            '40px'
                        ],
                        [
                            "eid148",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2de3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${_1de2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid107",
                            "left",
                            750,
                            250,
                            "linear",
                            "${mc-rsm-mc}",
                            '1122px',
                            '774px'
                        ]
                    ]
                }
            },
            "mc-rsm-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '284px', '560px', 'auto', 'auto'],
                            id: 'rsm-bg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rsm-bg.svg', '0px', '0px']
                        },
                        {
                            rect: ['74px', '492px', '118px', '39px', 'auto', 'auto'],
                            id: 'clic-mas-info-2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/clic-mas-info-2.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            id: 'mc-rsm_m25000',
                            type: 'image',
                            rect: ['-58px', '359px', '295px', '135px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mc-rsm_m25000.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            id: 'mc-rsm_m15504',
                            type: 'image',
                            rect: ['-58px', '199px', '295px', '135px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mc-rsm_m15504.svg', '0px', '0px']
                        },
                        {
                            userClass: 'size-opacity',
                            id: 'mc-rsm_mcmmi',
                            type: 'image',
                            rect: ['-58px', '39px', '295px', '135px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mc-rsm_mcmmi.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-58px', '359px', '302px', '135px', 'auto', 'auto'],
                            id: 'mc-rsm_m25000-a',
                            fill: ['rgba(0,0,0,0)', 'images/mc-rsm_m25000-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-58px', '199px', '302px', '135px', 'auto', 'auto'],
                            id: 'mc-rsm_m15504-a',
                            fill: ['rgba(0,0,0,0)', 'images/mc-rsm_m15504-a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-58px', '39px', '302px', '135px', 'auto', 'auto'],
                            id: 'mc-rsm_mcmmi-a',
                            fill: ['rgba(0,0,0,0)', 'images/mc-rsm_mcmmi-a.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '284px', '560px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    labels: {
                        "mcmmi": 250,
                        "m15504": 500,
                        "m25000": 750
                    },
                    data: [
                        [
                            "eid96",
                            "display",
                            450,
                            0,
                            "linear",
                            "${mc-rsm_m15504-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            700,
                            0,
                            "linear",
                            "${mc-rsm_m15504-a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            700,
                            0,
                            "linear",
                            "${mc-rsm_m25000-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            200,
                            0,
                            "linear",
                            "${mc-rsm_mcmmi-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            450,
                            0,
                            "linear",
                            "${mc-rsm_mcmmi-a}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "mp-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'mp-titulo',
                            type: 'image',
                            rect: ['0px', '0px', '510px', '69px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mp-titulo.svg', '0px', '0px']
                        },
                        {
                            rect: ['-704px', '90px', '470px', '320px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            align: 'justify',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Los modelos CMMI, SPICE e ISO 25000  vistos en el capítulo dos están dirigidos a las organizaciones, sin embargo la calidad tanto del producto como del proceso del software se basan también en la madurez de los equipos de trabajo y de los desarrolladores de software.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Para este fin se desarrollaron modelos que se enfocan en mejorar el trabajo realizado tanto por los equipos de desarrollo como los desarrolladores de manera individual.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">En este contexto aparecieron los modelos TPS (Team Process Software) dirigido a equipos de trabajo y el PSP (Personal Software Process) dirigido a desarrolladores individuales. Se pueden relacionar los modelos CMM, TPS y PSP así (Scalone, 2006):</p><ul><li><span style=\"font-weight:700;\">CMM –</span> mejora la capacidad de la organización y el enfoque de la Dirección.</li><li><span style=\"font-weight:700;\">TSP –</span> mejora el rendimiento del equipo. Existe un enfoque respecto del proceso o producto.</li><li><span style=\"font-weight:700;\">PSP –</span> mejora las habilidades individuales. Tiene un enfoque respecto del personal.</li></ul>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['-690px', '410px', '442px', '123px', 'auto', 'auto'],
                            id: 'mc-m25000-butbg',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mc-m25000-butbg.svg', '0px', '0px']
                        },
                        {
                            rect: ['-516px', '502px', '94px', '31px', 'auto', 'auto'],
                            id: 'clic-mas-info',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/clic-mas-info.svg', '0px', '0px']
                        },
                        {
                            rect: ['1064px', '416px', '257px', '77px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-ver-grafica',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-ver-grafica.svg', '0px', '0px']
                        },
                        {
                            rect: ['1075px', '60px', '189px', '473px', 'auto', 'auto'],
                            id: 'p3-no-face',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/p3-no-face.svg', '0px', '0px']
                        },
                        {
                            rect: ['1064px', '90', '562', '392', 'auto', 'auto'],
                            id: 'psp',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'psp-titulo',
                                type: 'image',
                                rect: ['0px', '0px', '562px', '392px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/psp-titulo.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '42px', '650px', '100px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​En el año de 1995 el PSP fue propuesto por Watts Humphrey. Inicialmente estaba dirigido para estudiantes pero en 1997 con el lanzamiento del libro “An Introduction to the Personal Software Process” el PSP ya estaba destinado a los desarrolladores profesionales (Pomeroy-Huff, 2009).</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Este proceso está dirigido a mejorar la calidad del software desarrollado por una persona en particular.</p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                rect: ['133px', '223px', '173px', '46px', 'auto', 'auto'],
                                id: 'mp-psp-caracteristicas-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-caracteristicas-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['319px', '223px', '173px', '46px', 'auto', 'auto'],
                                id: 'mp-psp-objetivos-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-objetivos-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['133px', '283px', '173px', '46px', 'auto', 'auto'],
                                id: 'mp-psp-aplicacion-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-aplicacion-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['319px', '283px', '173px', '46px', 'auto', 'auto'],
                                id: 'mp-psp-principios-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-principios-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '157px', '649px', '259px', 'auto', 'auto'],
                                id: 'mp-psp-caracteristicas',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-caracteristicas.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '157px', '649px', '259px', 'auto', 'auto'],
                                id: 'mp-psp-objeticos',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-objeticos.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '157px', '649px', '259px', 'auto', 'auto'],
                                id: 'mp-psp-aplicacion',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-aplicacion.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '157px', '649px', '259px', 'auto', 'auto'],
                                id: 'mp-psp-p1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-p1.svg', '0px', '0px']
                            },
                            {
                                rect: ['760px', '157px', '649px', '259px', 'auto', 'auto'],
                                id: 'mp-psp-p2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-p2.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1096px', '90', '563', '392', 'auto', 'auto'],
                            id: 'tsp',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'mp-psp-titulo',
                                type: 'image',
                                rect: ['0px', '0px', '563px', '392px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-titulo.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '60px', '650px', '93px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                id: 'Text4',
                                text: '<p style=\"margin: 0px;\">​TSP fue creado en 1996 por Watts Humphrey  TSP busca suministrar un modelo operacional que ayude a los equipos de desarrollo a realizar trabajos de calidad. (Scalone, 2006).</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Para el uso del TSP los desarrolladores primero deben ser entrenados en PSP.</p>',
                                align: 'left',
                                type: 'text'
                            },
                            {
                                rect: ['132px', '225px', '173px', '46px', 'auto', 'auto'],
                                id: 'mp-psp-caracteristicas-but2',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-caracteristicas-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['327px', '225px', '173px', '46px', 'auto', 'auto'],
                                id: 'mp-psp-principios-but2',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-principios-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['132px', '285px', '173px', '46px', 'auto', 'auto'],
                                id: 'mp-psp-objetivos-but2',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mp-psp-objetivos-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['327px', '285px', '173px', '46px', 'auto', 'auto'],
                                id: 'mp-tsp-r-but',
                                userClass: 'size-opacity',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/mp-tsp-r-but.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '153px', '649px', '259px', 'auto', 'auto'],
                                id: 'mp-tsp-c1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/mp-tsp-c1.svg', '0px', '0px']
                            },
                            {
                                rect: ['772px', '153px', '649px', '259px', 'auto', 'auto'],
                                id: 'mp-tsp-c2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/mp-tsp-c2.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '153px', '752px', '391px', 'auto', 'auto'],
                                id: 'mp-tsp-p',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/mp-tsp-p.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '153px', '649px', '259px', 'auto', 'auto'],
                                id: 'mp-tsp-o',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/mp-tsp-o.svg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '155px', '649px', '259px', 'auto', 'auto'],
                                id: 'mp-tsp-r1',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/mp-tsp-r1.svg', '0px', '0px']
                            },
                            {
                                rect: ['781px', '155px', '649px', '259px', 'auto', 'auto'],
                                id: 'mp-tsp-r2',
                                type: 'image',
                                display: 'none',
                                fill: ['rgba(0,0,0,0)', 'images/mp-tsp-r2.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['320px', '492px', '90', '28', 'auto', 'auto'],
                            id: 'pagination',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                id: 'pagination_indicator',
                                type: 'image',
                                rect: ['0px', '0px', '90px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pagination_indicator.svg', '0px', '0px']
                            },
                            {
                                rect: ['80px', '0px', '23px', '28px', 'auto', 'auto'],
                                id: 'pagination_fw',
                                userClass: 'fw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_fw.svg', '0px', '0px']
                            },
                            {
                                rect: ['-13px', '0px', '23px', '28px', 'auto', 'auto'],
                                id: 'pagination_bw',
                                userClass: 'bw',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pagination_bw.svg', '0px', '0px']
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['24px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'center',
                                id: '_1de2',
                                text: '<p style=\"margin: 0px;\">​1 de 2</p>',
                                display: 'block',
                                type: 'text'
                            },
                            {
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['24px', '5px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'center',
                                id: '_2de2',
                                text: '<p style=\"margin: 0px;\">​2 de 2</p>',
                                display: 'none',
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'mp-rsm-mc',
                            rect: ['1120px', '-18', '284', '560', 'auto', 'auto'],
                            id: 'mp-rsm-mc'
                        },
                        {
                            rect: ['538', '17px', '3px', '41px', 'auto', 'auto'],
                            id: 'separator1',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/separator1.svg', '0px', '0px']
                        },
                        {
                            rect: ['562px', '24px', '28px', '28px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-2.svg', '0px', '0px']
                        },
                        {
                            rect: ['659px', '257px', '21px', '21px', 'auto', 'auto'],
                            userClass: 'size-opacity',
                            id: 'btn-cerrar-3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/btn-cerrar-3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '510px', '69px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    labels: {
                        "psp": 1250,
                        "psp-c": 1750,
                        "psp-o": 2000,
                        "psp-a": 2250,
                        "psp-p": 2500,
                        "tsp": 3000,
                        "tsp-c": 3500,
                        "tsp-p": 4000,
                        "tsp-o": 4250,
                        "tsp-r": 4500
                    },
                    data: [
                        [
                            "eid408",
                            "display",
                            4200,
                            0,
                            "linear",
                            "${mp-tsp-o}",
                            'none',
                            'block'
                        ],
                        [
                            "eid409",
                            "display",
                            4450,
                            0,
                            "linear",
                            "${mp-tsp-o}",
                            'block',
                            'none'
                        ],
                        [
                            "eid373",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mp-psp-p1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid371",
                            "display",
                            2450,
                            0,
                            "linear",
                            "${mp-psp-p1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid369",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${mp-psp-p1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid313",
                            "display",
                            250,
                            0,
                            "linear",
                            "${p3-no-face}",
                            'none',
                            'block'
                        ],
                        [
                            "eid323",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${p3-no-face}",
                            'block',
                            'none'
                        ],
                        [
                            "eid330",
                            "display",
                            750,
                            0,
                            "linear",
                            "${mp-rsm-mc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid322",
                            "left",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            '-704px',
                            '40px'
                        ],
                        [
                            "eid391",
                            "left",
                            3000,
                            250,
                            "linear",
                            "${tsp}",
                            '1096px',
                            '40px'
                        ],
                        [
                            "eid321",
                            "left",
                            500,
                            250,
                            "linear",
                            "${mc-m25000-butbg}",
                            '-690px',
                            '54px'
                        ],
                        [
                            "eid399",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${mp-tsp-c1}",
                            '0px',
                            '-735px'
                        ],
                        [
                            "eid356",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${separator1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "left",
                            250,
                            250,
                            "linear",
                            "${p3-no-face}",
                            '1075px',
                            '519px'
                        ],
                        [
                            "eid394",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${mp-tsp-c1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid405",
                            "display",
                            3950,
                            0,
                            "linear",
                            "${mp-tsp-c1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid317",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid327",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid376",
                            "display",
                            1950,
                            0,
                            "linear",
                            "${mp-psp-objeticos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid377",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${mp-psp-objeticos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid315",
                            "display",
                            500,
                            0,
                            "linear",
                            "${clic-mas-info}",
                            'none',
                            'block'
                        ],
                        [
                            "eid325",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${clic-mas-info}",
                            'block',
                            'none'
                        ],
                        [
                            "eid359",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${psp}",
                            '1064px',
                            '40px'
                        ],
                        [
                            "eid372",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mp-psp-p2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid370",
                            "display",
                            2450,
                            0,
                            "linear",
                            "${mp-psp-p2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid368",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${mp-psp-p2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid355",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${btn-cerrar-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid380",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${btn-cerrar-3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid381",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${btn-cerrar-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid392",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${btn-cerrar-3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid410",
                            "display",
                            4450,
                            0,
                            "linear",
                            "${mp-tsp-r1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid384",
                            "display",
                            2700,
                            0,
                            "linear",
                            "${_1de2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid387",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${_1de2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid401",
                            "display",
                            3700,
                            0,
                            "linear",
                            "${_1de2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid418",
                            "display",
                            4450,
                            0,
                            "linear",
                            "${_1de2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid420",
                            "display",
                            4700,
                            0,
                            "linear",
                            "${_1de2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid411",
                            "display",
                            4450,
                            0,
                            "linear",
                            "${mp-tsp-r2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid416",
                            "top",
                            4500,
                            0,
                            "linear",
                            "${mp-tsp-r2}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid378",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${mp-psp-caracteristicas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid379",
                            "display",
                            1950,
                            0,
                            "linear",
                            "${mp-psp-caracteristicas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid414",
                            "left",
                            4500,
                            250,
                            "linear",
                            "${mp-tsp-r1}",
                            '0px',
                            '-726px'
                        ],
                        [
                            "eid406",
                            "display",
                            3950,
                            0,
                            "linear",
                            "${mp-tsp-p}",
                            'none',
                            'block'
                        ],
                        [
                            "eid407",
                            "display",
                            4200,
                            0,
                            "linear",
                            "${mp-tsp-p}",
                            'block',
                            'none'
                        ],
                        [
                            "eid385",
                            "display",
                            2700,
                            0,
                            "linear",
                            "${_2de2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid386",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${_2de2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid402",
                            "display",
                            3700,
                            0,
                            "linear",
                            "${_2de2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid419",
                            "display",
                            4450,
                            0,
                            "linear",
                            "${_2de2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid421",
                            "display",
                            4700,
                            0,
                            "linear",
                            "${_2de2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid319",
                            "left",
                            500,
                            250,
                            "linear",
                            "${btn-ver-grafica}",
                            '1064px',
                            '154px'
                        ],
                        [
                            "eid397",
                            "left",
                            3500,
                            250,
                            "linear",
                            "${mp-tsp-c2}",
                            '772px',
                            '0px'
                        ],
                        [
                            "eid316",
                            "display",
                            500,
                            0,
                            "linear",
                            "${mc-m25000-butbg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid326",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${mc-m25000-butbg}",
                            'block',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            500,
                            0,
                            "linear",
                            "${btn-ver-grafica}",
                            'none',
                            'block'
                        ],
                        [
                            "eid324",
                            "display",
                            1050,
                            0,
                            "linear",
                            "${btn-ver-grafica}",
                            'block',
                            'none'
                        ],
                        [
                            "eid398",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${mp-tsp-c2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid404",
                            "display",
                            3950,
                            0,
                            "linear",
                            "${mp-tsp-c2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid320",
                            "left",
                            500,
                            250,
                            "linear",
                            "${clic-mas-info}",
                            '-516px',
                            '228px'
                        ],
                        [
                            "eid390",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${tsp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid367",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${mp-psp-p2}",
                            '760px',
                            '0px'
                        ],
                        [
                            "eid382",
                            "display",
                            2450,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid383",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${pagination}",
                            'block',
                            'none'
                        ],
                        [
                            "eid400",
                            "display",
                            3450,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid403",
                            "display",
                            3950,
                            0,
                            "linear",
                            "${pagination}",
                            'block',
                            'none'
                        ],
                        [
                            "eid417",
                            "display",
                            4450,
                            0,
                            "linear",
                            "${pagination}",
                            'none',
                            'block'
                        ],
                        [
                            "eid374",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${mp-psp-aplicacion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid375",
                            "display",
                            2450,
                            0,
                            "linear",
                            "${mp-psp-aplicacion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid366",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${mp-psp-p1}",
                            '0px',
                            '-736px'
                        ],
                        [
                            "eid415",
                            "left",
                            4500,
                            250,
                            "linear",
                            "${mp-tsp-r2}",
                            '781px',
                            '0px'
                        ],
                        [
                            "eid357",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${psp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid388",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${psp}",
                            'block',
                            'none'
                        ],
                        [
                            "eid329",
                            "left",
                            750,
                            250,
                            "linear",
                            "${mp-rsm-mc}",
                            '1120px',
                            '774px'
                        ]
                    ]
                }
            },
            "mp-rsm-mc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'rsm-bg',
                            rect: ['0px', '0px', '284px', '560px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rsm-bg.svg', '0px', '0px']
                        },
                        {
                            rect: ['-58px', '77px', '295px', '135px', 'auto', 'auto'],
                            id: 'mp-rsm_psp',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mp-rsm_psp.svg', '0px', '0px']
                        },
                        {
                            rect: ['-58px', '317px', '295px', '135px', 'auto', 'auto'],
                            id: 'mp-rsm_tsp',
                            userClass: 'size-opacity',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mp-rsm_tsp.svg', '0px', '0px']
                        },
                        {
                            rect: ['-58px', '77px', '302px', '135px', 'auto', 'auto'],
                            id: 'mp-rsm_psp-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mp-rsm_psp-a.svg', '0px', '0px']
                        },
                        {
                            rect: ['-58px', '317px', '302px', '135px', 'auto', 'auto'],
                            id: 'mp-rsm_tsp-a',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mp-rsm_tsp-a.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '284px', '560px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "psp": 250,
                        "tsp": 500
                    },
                    data: [
                        [
                            "eid307",
                            "display",
                            450,
                            0,
                            "linear",
                            "${mp-rsm_tsp-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid305",
                            "display",
                            200,
                            0,
                            "linear",
                            "${mp-rsm_psp-a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid306",
                            "display",
                            450,
                            0,
                            "linear",
                            "${mp-rsm_psp-a}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-79808291");
