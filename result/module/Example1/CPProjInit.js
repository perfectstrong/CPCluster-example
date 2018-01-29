if (!window.cp) window.cp = function(str) {
    return document.getElementById(str)
};
cp.CPProjInit = function() {
    if (cp && cp.model && cp.model.data) return;
    cp.model = {};
    cp.poolResources = {};
    cp.D = cp.model.data = {
        pref: {
            acc: 1,
            rkt: 0,
            hsr: 1
        },
        si5071: {
            type: 612,
            from: 0,
            to: 219,
            rp: 0,
            rpa: 0,
            mdi: 'si5071c',
            retainState: false,
            immo: true,
            apsn: 'Slide4365',
            JSONTT_4: [],
            cpa: true,
            oca: 'cp.jumpToNextSlide();',
            JSONTT_5: [],
            ofa: 'cpCmndResume = 1;',
            iflbx: false,
            ipflbx: true,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [5071]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        si5071c: {
            b: [1088, 5, 1273, 135],
            uid: 5071,
            dn: 'si5071',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: ' ',
            traccstr: '',
            ti: -1,
            sc: '#01c3e6',
            sw: 0,
            ss: 0,
            fa: 100,
            bc: '#99efff',
            p0: [
                [0],
                [1, 1180.5, 5],
                [2, 1088, 135],
                [2, 1273, 135],
                [2, 1180.5, 5],
                [4]
            ],
            svg: false,
            vbwr: [1088, 5, 1273, 135],
            tr: 'rotate(180deg)',
            vb: [1088, 4, 1273, 135]
        },
        si5082: {
            type: 612,
            from: 0,
            to: 219,
            rp: 0,
            rpa: 0,
            mdi: 'si5082c',
            retainState: false,
            immo: true,
            apsn: 'Slide4365',
            JSONTT_4: [],
            cpa: true,
            oca: 'cp.jumpToNextSlide();',
            JSONTT_5: [],
            ofa: 'cpCmndResume = 1;',
            iflbx: false,
            ipflbx: true,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [5082]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        si5082c: {
            b: [0, -1, 1278, 48],
            uid: 5082,
            dn: 'si5082',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: ' ',
            traccstr: '',
            ti: -1,
            sc: '#01c3e6',
            sw: 0,
            ss: 0,
            fa: 100,
            bc: '#99efff',
            p0: [
                [0],
                [1, 0, -1],
                [2, 0, 48],
                [2, 1278, 48],
                [2, 1278, -1],
                [2, 0, -1],
                [4]
            ],
            svg: false,
            vbwr: [0, -1, 1278, 48],
            vb: [0, -1, 1278, 48]
        },
        si8182: {
            type: 15,
            from: 1,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'si8182c',
            retainState: false,
            immo: false,
            apsn: 'Slide4365',
            iflbx: false,
            ipflbx: true,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [8182]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        si8182c: {
            b: [86, 0, 278, 669],
            uid: 8182,
            sr: cp.fd,
            ip: 'dr/5104_192_669.png',
            dn: 'si8182',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'Image ',
            traccstr: '',
            ti: -1,
            vbwr: [86, 0, 278, 669],
            vb: [86, 0, 278, 669]
        },
        Title_AutoShape_2: {
            type: 589,
            from: 1,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'Title_AutoShape_2c',
            retainState: false,
            immo: false,
            apsn: 'Slide4365',
            JSONTT_4: [],
            cpa: true,
            oca: 'cp.jumpToNextSlide();',
            JSONTT_5: [],
            ofa: 'cpCmndResume = 1;',
            iflbx: false,
            ipflbx: true,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [8186]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        Title_AutoShape_2c: {
            b: [365, 0, 1280, 669],
            uid: 8186,
            sr: cp.fd,
            ip: 'dr/Title_AutoShape_2.png',
            dn: 'Title_AutoShape_2',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'Example 1 CPCluster-example ',
            traccstr: '',
            ti: -1,
            sc: '#0080ff',
            sw: 0,
            ss: 0,
            fa: 0,
            bc: '#ebfcff',
            p0: [
                [0],
                [1, 532.25, 0],
                [3, 439.88, 0, 365, 74.88, 365, 167.25],
                [2, 365, 501.75],
                [3, 365, 594.12, 439.88, 669, 532.25, 669],
                [2, 1112.75, 669],
                [3, 1205.12, 669, 1280.00, 594.12, 1280.00, 501.75],
                [2, 1280.00, 167.25],
                [3, 1280.00, 74.88, 1205.12, 0, 1112.75, 0],
                [2, 532.25, 0],
                [4]
            ],
            svg: false,
            vbwr: [365, 0, 1280, 669],
            vb: [365, 0, 1280, 669]
        },
        Slide4365: {
            lb: '',
            id: 4365,
            from: 1,
            to: 90,
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide4365c',
            st: 'Normal Slide',
            ccProperties: {
                1280: {
                    pos: 7,
                    x: 35,
                    y: 88
                }
            },
            audCC: [],
            vidCC: [],
            accstr: ' ',
            si: [{
                n: 'si5071',
                t: 612
            }, {
                n: 'si5082',
                t: 612
            }, {
                n: 'si8182',
                t: 15
            }, {
                n: 'Title_AutoShape_2',
                t: 589
            }],
            iph: [],
            v: false,
            bc: '#004a69',
            JSONTT_0: [],
            JSONTT_6: [],
            qs: ''
        },
        Slide4365c: {
            b: [0, 0, 0, 0],
            sr: cp.fd,
            uid: 4365,
            dn: 'Slide4365',
            visible: '1'
        },
        Title_AutoShape_3: {
            type: 589,
            from: 91,
            to: 219,
            rp: 0,
            rpa: 0,
            mdi: 'Title_AutoShape_3c',
            retainState: false,
            immo: false,
            apsn: 'Slide8200',
            JSONTT_4: [],
            cpa: true,
            oca: 'cp.jumpToNextSlide();',
            JSONTT_5: [],
            ofa: 'cpCmndResume = 1;',
            iflbx: false,
            ipflbx: true,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [8217]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        Title_AutoShape_3c: {
            b: [0, 0, 1280, 98],
            uid: 8217,
            sr: cp.fd,
            ip: 'dr/Title_AutoShape_3.png',
            dn: 'Title_AutoShape_3',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'Hello ',
            traccstr: '',
            ti: -1,
            sc: '#0080ff',
            sw: 0,
            ss: 0,
            fa: 0,
            bc: '#ebfcff',
            p0: [
                [0],
                [1, 24.5, 0],
                [3, 10.97, 0, 0, 10.97, 0, 24.5],
                [2, 0, 73.5],
                [3, 0, 87.03, 10.97, 98, 24.5, 98],
                [2, 1255.5, 98],
                [3, 1269.03, 98, 1280.00, 87.03, 1280.00, 73.5],
                [2, 1280.00, 24.5],
                [3, 1280.00, 10.97, 1269.03, 0, 1255.5, 0],
                [2, 24.5, 0],
                [4]
            ],
            svg: false,
            vbwr: [0, 0, 1280, 98],
            vb: [0, 0, 1280, 98]
        },
        Image_1: {
            type: 15,
            from: 91,
            to: 219,
            rp: 0,
            rpa: 0,
            mdi: 'Image_1c',
            retainState: false,
            immo: false,
            apsn: 'Slide8200',
            iflbx: false,
            ipflbx: true,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [8233]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        Image_1c: {
            b: [924, 82, 1083, 682],
            uid: 8233,
            sr: cp.fd,
            ip: 'dr/5104_159_600.png',
            dn: 'Image_1',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'Image ',
            traccstr: '',
            ti: -1,
            vbwr: [924, 82, 1083, 682],
            vb: [924, 82, 1083, 682]
        },
        SubTitle_AutoShape_1: {
            type: 590,
            from: 91,
            to: 219,
            rp: 0,
            rpa: 0,
            mdi: 'SubTitle_AutoShape_1c',
            retainState: false,
            immo: false,
            apsn: 'Slide8200',
            JSONTT_4: [],
            cpa: true,
            oca: 'cp.jumpToNextSlide();',
            JSONTT_5: [],
            ofa: 'cpCmndResume = 1;',
            iflbx: false,
            ipflbx: true,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [8240]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        SubTitle_AutoShape_1c: {
            b: [11, 156, 629, 352],
            uid: 8240,
            sr: cp.fd,
            ip: 'dr/SubTitle_AutoShape_1.png',
            dn: 'SubTitle_AutoShape_1',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'Salut! ',
            traccstr: '',
            ti: -1,
            sc: '#0080ff',
            sw: 0,
            ss: 0,
            fa: 0,
            bc: '#01c3e6',
            p0: [
                [0],
                [1, 60.00, 156],
                [3, 32.94, 156, 11, 177.94, 11, 205],
                [2, 11, 303],
                [3, 11, 330.06, 32.94, 352, 60.00, 352],
                [2, 580.00, 352],
                [3, 607.06, 352, 629, 330.06, 629, 303],
                [2, 629, 205],
                [3, 629, 177.94, 607.06, 156, 580.00, 156],
                [2, 60.00, 156],
                [4]
            ],
            svg: false,
            vbwr: [11, 156, 629, 352],
            vb: [11, 156, 629, 352]
        },
        Text_Caption_1Ad: {
            src: 'module/Example1/ar/8266.mp3',
            from: 91,
            du: 4346,
            to: 219
        },
        Text_Caption_1: {
            type: 19,
            from: 91,
            to: 219,
            rp: 0,
            rpa: 0,
            mdi: 'Text_Caption_1c',
            retainState: false,
            immo: false,
            apsn: 'Slide8200',
            ia: 'Text_Caption_1Ad',
            iflbx: false,
            ipflbx: true,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [8256]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        Text_Caption_1c: {
            b: [77, 353, 563, 616],
            uid: 8256,
            sr: cp.fd,
            ip: 'dr/Text_Caption_1.png',
            dn: 'Text_Caption_1',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'Good morning! This object attaches to an audio resource. ',
            traccstr: '',
            ti: -1,
            vbwr: [77, 353, 563, 616],
            vb: [77, 353, 563, 616]
        },
        Slide8200: {
            lb: '',
            id: 8200,
            from: 91,
            to: 219,
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide8200c',
            st: 'Normal Slide',
            ccProperties: {
                1280: {
                    pos: 7,
                    x: 35,
                    y: 88
                }
            },
            audCC: [],
            vidCC: [],
            accstr: ' ',
            si: [{
                n: 'si5071',
                t: 612
            }, {
                n: 'si5082',
                t: 612
            }, {
                n: 'Title_AutoShape_3',
                t: 589
            }, {
                n: 'Image_1',
                t: 15
            }, {
                n: 'SubTitle_AutoShape_1',
                t: 590
            }, {
                n: 'Text_Caption_1',
                t: 19
            }],
            iph: [],
            oa: 'Text_Caption_1Ad',
            v: false,
            bc: '#004a69',
            JSONTT_0: [],
            JSONTT_6: [],
            qs: ''
        },
        Slide8200c: {
            b: [0, 0, 0, 0],
            sr: cp.fd,
            uid: 8200,
            dn: 'Slide8200',
            visible: '1'
        },
        quizzingData: {
            allowBackwardMovement: true,
            allowReviewMode: true,
            isInReviewMode: false,
            allowSkipAnyScoreSlide: true,
            allowSkipFailScoreSlide: true,
            allowSkipPassScoreSlide: true,
            anyGradeAction: '',
            anyGradeActionArg1: '',
            anyGradeActionArg2: '',
            defaultActionType: 'continue',
            defaultActionArg1: '',
            defaultActionArg2: '',
            failedScoreFeedback: 'Désolé, vous avez échoué !',
            failingGradeAction: 'cpCmndResume = 1;',
            JSONTT_5: [],
            passedScoreFeedback: 'Bravo, vous avez réussi ! le quiz !',
            passingGradeAction: 'cpCmndResume = 1;',
            JSONTT_4: [],
            pretestAction: '',
            it: false,
            anyScoreSlide: -1,
            firstSlideInQuiz: -1,
            lastSlideInQuiz: -1,
            quizScopeEndSlide: -1,
            maxScore: 0,
            minScore: 0,
            maxPretestScore: 0,
            numQuestionsInQuiz: 0,
            numQuizAttemptsAllowed: 1,
            passingScore: 0,
            quizInfoCurrentAttempt: 0,
            quizInfoPercentScored: 0,
            quizProgress: '',
            questionAdvance: 'optional',
            quizAdvance: 'optional',
            quizID: 377,
            showFinishButton: true,
            showProgress: true,
            questionPoolsInitialized: true,
            quizInfoAnswerChoice: '',
            quizInfoAttempts: 1,
            quizInfoLastSlidePointScored: 0,
            quizInfoMaxAttemptsOnCurrentQuestion: 1,
            quizInfoPassFail: 0,
            quizInfoPointsPerQuestionSlide: 0,
            quizInfoPointsScored: 0,
            quizInfoQuestionSlideTiming: 0,
            quizInfoQuestionSlideType: '',
            quizInfoQuizPassPercent: 80,
            quizInfoQuizPassPoints: 0,
            quizInfoTotalCorrectAnswers: 0,
            quizInfoTotalProjectPoints: 0,
            quizInfoTotalQuestionsPerProject: 0,
            quizInfoTotalQuizPoints: 0,
            quizInfoTotalUnansweredQuestions: 0,
            reportingVariables: 0,
            reportingEnabled: false,
            submitAll: false,
            hidePlaybarInQuiz: false,
            quizBranchAware: false,
            passFailPassingScoreTypeInPrecent: true,
            passFailPassingScoreValue: 80,
            progressIndicatorType: 0,
            rpViDv: 'Cette diapositive a été affichée sur un périphérique de largeur différente.',
            progressIndicatorString: 'Question %d sur %d    '
        },
        rtDialog: {
            rtbgfc: '#333237',
            rtbgsc: '#ffffff',
            rtbtnfc: '#01c3e6',
            rtbtnsc: '#01c3e6',
            rtsc: '#ffffff',
            rttc: '#ffffff',
            rttsc: '#34cfeb',
            rtfn: 'TrebuchetMS',
            rtt: 'Envoyer tout',
            rtsam: 'Vous avez répondu à toutes les questions. Que voulez-vous faire ensuite ?',
            rtiqm: 'Une ou plusieurs questions sont incomplètes. Répondez à toutes les questions pour continuer.',
            rtsiqm: 'Il reste encore quelques questions auxquelles vous n’avez pas répondu. Voulez-vous vraiment continuer sans répondre à ces questions ?',
            rtsanym: 'Vous êtes arrivé à la fin du quiz mais il reste des questions auxquelles vous n’avez pas répondu. Que voulez-vous faire ?',
            rtmtqm: 'Vous devez répondre à au moins une question pour pouvoir continuer.',
            rtokb: 'Ok',
            rtcb: 'ANNULER',
            rtyb: 'Oui',
            rtnb: 'Non',
            rtsab: 'Envoyer toutes les réponses',
            rtsanyb: 'Envoyer quand même',
            rtrtqb: 'Retour au quiz',
            rtWarningTitle: 'Adobe Captivate',
            rtUnsupportedBowser: 'Ce navigateur ne prend pas en charge tout le contenu du fichier que vous essayez d’afficher. Utilisez l’un des navigateurs suivants :<ul><li>Internet Explorer 9 ou version ultérieure</li><li>Safari 5.1 ou version ultérieure</li><li>Google Chrome 17 ou version ultérieure</li><li>Firefox @FFVERSION ou version ultérieure</li></ul>',
            rtPopupBlkr: 'Accédez à vos paramètres et désactivez le bloqueur de fenêtres contextuelles'
        },
        sgMgr: {
            ri: 0,
            sg: [
                [0, [
                    [1, [23, 2]]
                ]]
            ]
        },
        project: {
            fps: 30,
            hasTOC: 0,
            w: 1280,
            h: 720,
            iw: 1280,
            ih: 720,
            prm: [1, 1, 0, 0],
            stateNameToLocalizedStateNameMap: {
                kCPNormalState: 'Normal',
                kCPDownState: 'Inactif',
                kCPRolloverState: 'RollOver',
                kCPVisitedState: 'Visité(e)',
                kCPDragoverState: 'DragOver',
                kCPDragstartState: 'DragStart',
                kCPDropCorrect: 'DropCorrect',
                kCPDropIncorrect: 'DropIncorrect',
                kCPDropAccept: 'DropAccept',
                kCPDropReject: 'DropReject'
            },
            prjBgColor: '#ffffff',
            pkt: 0,
            htmlBgColor: '#eafbff',
            shc: false,
            pN: 'Example1'
        },
        project_main: {
            from: 1,
            to: 219,
            currentFrame: 1,
            useResponsive: false,
            responsiveType: 4,
            currentFrame: 1,
            useWidgetVersion7: false,
            isPublishedFromLacuna: false,
            slides: 'Slide4365,Slide8200',
            questions: '',
            autoplay: true,
            preloader: true,
            preloaderFileName: 'dr/loading.gif',
            preloaderPercentage: 100,
            preloaderimagel: 625,
            preloaderimaget: 345,
            pprtd: false,
            peon: false,
            fadeInAtStart: 0,
            fadeOutAtEnd: 0,
            endAction: 'cp.stopMovie();'
        },
        borderProperties: {
            hasBorder: true,
            l: 0,
            t: 0,
            r: 0,
            b: 30,
            w: 1280,
            h: 750,
            hasSqEd: false,
            bc: '#c0c0c0'
        },
        playBarProperties: {
            hasPlayBar: true,
            jsfile: 'playbarScript.js',
            cssfile: 'playbarStyle.css',
            position: 3,
            layout: 3,
            showOnHover: false,
            overlay: false,
            tworow: false,
            hasRewind: true,
            hasBackward: true,
            hasPlay: true,
            hasSlider: true,
            hasForward: true,
            hasCC: false,
            hasAudioOn: true,
            hasExit: true,
            hasFastForward: true,
            applyColors: true,
            BkColor: {
                bc: '#eafbff',
                alpha: 100
            },
            FaceColor: {
                bc: '#bfbfbf',
                alpha: 100
            },
            GlowColor: {
                bc: '#006172',
                alpha: 100
            },
            IconColor: {
                bc: '#ffffff',
                alpha: 100
            },
            alpha: 100,
            noToolTips: false,
            locale: 2
        },
        tocProperties: {},
        ccProperties: {
            1280: {
                w: 30,
                h: 12,
                x: -1,
                y: -1,
                txtl: 0,
                pos: 7,
                v: false,
                c: '#ffffff',
                o: 49
            }
        },
        trecs: [{
            link: 4365,
            text: ['Example 1 CPCluster-example']
        }, {
            link: 8200,
            text: ['Hello', 'Salut!', 'Good morning! This object attaches to an audio resource.']
        }],
        typekit: {
            kit_id: ''
        },
    };
    cp.model.projectImages = ['assets/htmlimages/Pause2x.gif', 'assets/htmlimages/Play2x.gif', 'assets/htmlimages/expand_icon.png', 'assets/htmlimages/gesturemobileicon@2x.png', 'assets/htmlimages/gesturemobilelandscape.png', 'assets/htmlimages/gesturetabletimage.png', 'assets/htmlimages/img_trans.gif', 'assets/htmlimages/placeholder.png'];
    cp.model.images = ['dr/5104_159_600.png', 'dr/5104_192_669.png', 'dr/SubTitle_AutoShape_1.png', 'dr/Text_Caption_1.png', 'dr/Title_AutoShape_2.png', 'dr/Title_AutoShape_3.png'];
    cp.model.videos = [];
    cp.model.slideVideos = [];
    cp.model.tocVideos = [];
    cp.model.audios = ['ar/8266.mp3'];
    cp.initVariables = function() {
        cp.cv('CaptivateVersion', '10.0.0', 1, 1000, 0);
        cp.cv('cpCmndCC', 0, 1, 15, 0);
        cp.cv('cpCmndExit', 0, 1, 15, 0);
        cp.cv('cpCmndMute', 0, 1, 15, 0);
        cp.cv('cpCmndPause', 0, 1, 15, 0);
        cp.cv('cpCmndPlaybarMoved', 0, 1, 15, 0);
        cp.cv('cpCmndPrevious', 0, 1, 15, 0);
        cp.cv('cpCmndResume', 0, 1, 15, 0);
        cp.cv('cpCmndShowPlaybar', 1, 1, 15, 0);
        cp.cv('cpCmndTOCVisible', 0, 1, 15, 0);
        cp.cv('cpCmndVolume', 100, 1, 15, 0);
        cp.cv('cpInQuizScope', 0, 1, 15, 0);
        cp.cv('cpInReviewMode', 0, 1, 15, 0);
        cp.cv('cpInfoAuthor', 'author', 1, 15, 0);
        cp.cv('cpInfoCompany', 'company', 1, 15, 0);
        cp.cv('cpInfoCopyright', 'copyright', 1, 15, 0);
        cp.cv('cpInfoCourseID', -1, 1, 15, 0);
        cp.cv('cpInfoCourseName', 'Course Name', 1, 15, 0);
        cp.cv('cpInfoCurrentDate', 'dd', 1, 15, 0);
        cp.cv('cpInfoCurrentDateString', 'mm/dd/yyyy', 1, 15, 0);
        cp.cv('cpInfoCurrentDateStringDDMMYYYY', 'dd/mm/yyyy', 1, 15, 0);
        cp.cv('cpInfoCurrentDay', 1, 1, 15, 0);
        cp.cv('cpInfoCurrentFrame', 1, 1, 15, 0);
        cp.cv('cpInfoCurrentHour', 'hh', 1, 15, 0);
        cp.cv('cpInfoCurrentLocaleDateString', '', 1, 15, 0);
        cp.cv('cpInfoCurrentMinutes', 'mm', 1, 15, 0);
        cp.cv('cpInfoCurrentMonth', 'mm', 1, 15, 0);
        cp.cv('cpInfoCurrentSlide', 1, 1, 15, 0);
        cp.cv('cpInfoCurrentSlideLabel', 'slide', 1, 15, 0);
        cp.cv('cpInfoCurrentSlideType', 'Normal', 1, 15, 0);
        cp.cv('cpInfoCurrentTime', 'hh:mm:ss', 1, 15, 0);
        cp.cv('cpInfoCurrentYear', 'yyyy', 1, 15, 0);
        cp.cv('cpInfoDescription', 'project description', 1, 15, 0);
        cp.cv('cpInfoElapsedTimeMS', 0, 1, 15, 0);
        cp.cv('cpInfoEmail', 'author@company.com', 1, 15, 0);
        cp.cv('cpInfoEpochMS', 0, 1, 15, 0);
        cp.cv('cpInfoFPS', 1, 1, 15, 0);
        cp.cv('cpInfoFrameCount', 1, 1, 15, 0);
        cp.cv('cpInfoGeoLocation', '', 1, 15, 0);
        cp.cv('cpInfoHasPlaybar', 1, 1, 1000, 0);
        cp.cv('cpInfoIsStandalone', 1, 1, 15, 0);
        cp.cv('cpInfoLastVisitedSlide', 0, 1, 15, 0);
        cp.cv('cpInfoMobileOS', 0, 1, 15, 0);
        cp.cv('cpInfoPercentage', 0, 1, 15, 0);
        cp.cv('cpInfoPrevSlide', -1, 1, 15, 0);
        cp.cv('cpInfoProjectName', '', 1, 15, 0);
        cp.cv('cpInfoSlideCount', 1, 1, 15, 0);
        cp.cv('cpInfoSlidesInProject', 2, 1, 1000, 0);
        cp.cv('cpInfoWebsite', 'www.company.com', 1, 15, 0);
        cp.cv('cpLockTOC', 0, 1, 1000, 0);
        cp.cv('cpQuizInfoAnswerChoice', '', 1, 15, 0);
        cp.cv('cpQuizInfoAttempts', 0, 1, 15, 0);
        cp.cv('cpQuizInfoLastSlidePointScored', 0, 1, 15, 0);
        cp.cv('cpQuizInfoMaxAttemptsOnCurrentQuestion', 0, 1, 15, 0);
        cp.cv('cpQuizInfoNegativePointsOnCurrentQuestionSlide', 0, 1, 15, 0);
        cp.cv('cpQuizInfoPassFail', 0, 1, 15, 0);
        cp.cv('cpQuizInfoPointsPerQuestionSlide', 0, 1, 15, 0);
        cp.cv('cpQuizInfoPointsscored', 0, 1, 15, 0);
        cp.cv('cpQuizInfoPreTestMaxScore', 0, 1, 15, 0);
        cp.cv('cpQuizInfoPreTestTotalCorrectAnswers', 0, 1, 15, 0);
        cp.cv('cpQuizInfoPreTestTotalQuestions', 0, 1, 1000, 0);
        cp.cv('cpQuizInfoPretestPointsscored', 0, 1, 15, 0);
        cp.cv('cpQuizInfoPretestScorePercentage', 0, 1, 15, 0);
        cp.cv('cpQuizInfoQuestionPartialScoreOn', 0, 1, 15, 0);
        cp.cv('cpQuizInfoQuestionSlideTiming', 0, 1, 15, 0);
        cp.cv('cpQuizInfoQuestionSlideType', 'choice', 1, 15, 0);
        cp.cv('cpQuizInfoQuizPassPercent', 80, 1, 1000, 0);
        cp.cv('cpQuizInfoQuizPassPoints', 0, 1, 1000, 0);
        cp.cv('cpQuizInfoTotalCorrectAnswers', 0, 1, 15, 0);
        cp.cv('cpQuizInfoTotalProjectPoints', 0, 1, 15, 0);
        cp.cv('cpQuizInfoTotalQuestionsPerProject', 0, 1, 15, 0);
        cp.cv('cpQuizInfoTotalQuizPoints', 0, 1, 1000, 0);
        cp.cv('cpQuizInfoTotalUnansweredQuestions', 0, 1, 15, 0);
        cp.cv('cpInfoPrevFrame', 0, 1, 15, 0);
        cp.cv('cpQuizInfoStudentID', '', 0, 15, 0);
        cp.cv('cpQuizInfoStudentName', '', 0, 15, 0);
    };
    cp.ReportingVariables = "";
};