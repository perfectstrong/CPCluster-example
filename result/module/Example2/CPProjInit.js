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
                stsi: [8130]
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
            b: [0, 240, 1280, 480],
            uid: 8130,
            sr: cp.fd,
            ip: 'dr/Title_AutoShape_2.png',
            dn: 'Title_AutoShape_2',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'Example2 CPCluster-example ',
            traccstr: '',
            ti: -1,
            sc: '#0080ff',
            sw: 0,
            ss: 0,
            fa: 0,
            bc: '#bbedff',
            p0: [
                [0],
                [1, 60.00, 240.00],
                [3, 26.86, 240.00, 0, 266.86, 0, 300.00],
                [2, 0, 420.00],
                [3, 0, 453.14, 26.86, 480.00, 60.00, 480.00],
                [2, 1220.00, 480.00],
                [3, 1253.14, 480.00, 1280.00, 453.14, 1280.00, 420.00],
                [2, 1280.00, 300.00],
                [3, 1280.00, 266.86, 1253.14, 240.00, 1220.00, 240.00],
                [2, 60.00, 240.00],
                [4]
            ],
            svg: false,
            vbwr: [0, 240, 1280, 480],
            vb: [0, 240, 1280, 480]
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
                n: 'Title_AutoShape_2',
                t: 589
            }],
            iph: [],
            v: false,
            bc: '#5ce1ff',
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
        SubTitle_AutoShape_1: {
            type: 590,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'SubTitle_AutoShape_1c',
            retainState: false,
            immo: false,
            apsn: 'Slide8144',
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
                stsi: [8161]
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
            b: [0, 101, 1280, 165],
            uid: 8161,
            sr: cp.fd,
            ip: 'dr/SubTitle_AutoShape_1.png',
            dn: 'SubTitle_AutoShape_1',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'How are you? ',
            traccstr: '',
            ti: -1,
            sc: '#0080ff',
            sw: 0,
            ss: 0,
            fa: 0,
            bc: '#00beff',
            p0: [
                [0],
                [1, 16, 101],
                [3, 7.16, 101, 0, 108.16, 0, 117],
                [2, 0, 149],
                [3, 0, 157.84, 7.16, 165, 16, 165],
                [2, 1264, 165],
                [3, 1272.84, 165, 1280.00, 157.84, 1280.00, 149],
                [2, 1280.00, 117],
                [3, 1280.00, 108.16, 1272.84, 101, 1264, 101],
                [2, 16, 101],
                [4]
            ],
            svg: false,
            vbwr: [0, 101, 1280, 165],
            vb: [0, 101, 1280, 165]
        },
        SmartShape_1: {
            type: 612,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'SmartShape_1c',
            retainState: false,
            immo: false,
            apsn: 'Slide8144',
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
                stsi: [8177]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        SmartShape_1c: {
            b: [808, 177, 1114, 272],
            uid: 8177,
            sr: cp.fd,
            ip: 'dr/SmartShape_1.png',
            dn: 'SmartShape_1',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'A ',
            traccstr: '',
            ti: -1,
            sc: '#00beff',
            sw: 0,
            ss: 0,
            fa: 100,
            bc: '#005f80',
            p0: [
                [0],
                [1, 831.75, 177],
                [3, 818.63, 177, 808, 187.63, 808, 200.75],
                [2, 808, 248.25],
                [3, 808, 261.37, 818.63, 272, 831.75, 272],
                [2, 1090.25, 272],
                [3, 1103.37, 272, 1114, 261.37, 1114, 248.25],
                [2, 1114, 200.75],
                [3, 1114, 187.63, 1103.37, 177, 1090.25, 177],
                [2, 831.75, 177],
                [4]
            ],
            svg: false,
            vbwr: [808, 177, 1114, 272],
            vb: [808, 177, 1114, 272]
        },
        SmartShape_2: {
            type: 612,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'SmartShape_2c',
            retainState: false,
            immo: false,
            apsn: 'Slide8144',
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
                stsi: [8191]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        SmartShape_2c: {
            b: [807, 297, 1113, 392],
            uid: 8191,
            sr: cp.fd,
            ip: 'dr/SmartShape_2.png',
            dn: 'SmartShape_2',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'B ',
            traccstr: '',
            ti: -1,
            sc: '#00beff',
            sw: 0,
            ss: 0,
            fa: 100,
            bc: '#005f80',
            p0: [
                [0],
                [1, 830.75, 297],
                [3, 817.63, 297, 807, 307.63, 807, 320.75],
                [2, 807, 368.25],
                [3, 807, 381.37, 817.63, 392, 830.75, 392],
                [2, 1089.25, 392],
                [3, 1102.37, 392, 1113, 381.37, 1113, 368.25],
                [2, 1113, 320.75],
                [3, 1113, 307.63, 1102.37, 297, 1089.25, 297],
                [2, 830.75, 297],
                [4]
            ],
            svg: false,
            vbwr: [807, 297, 1113, 392],
            vb: [807, 297, 1113, 392]
        },
        SmartShape_3: {
            type: 612,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'SmartShape_3c',
            retainState: false,
            immo: false,
            apsn: 'Slide8144',
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
                stsi: [8205]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        SmartShape_3c: {
            b: [807, 417, 1113, 512],
            uid: 8205,
            sr: cp.fd,
            ip: 'dr/SmartShape_3.png',
            dn: 'SmartShape_3',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'C ',
            traccstr: '',
            ti: -1,
            sc: '#00beff',
            sw: 0,
            ss: 0,
            fa: 100,
            bc: '#005f80',
            p0: [
                [0],
                [1, 830.75, 417],
                [3, 817.63, 417, 807, 427.63, 807, 440.75],
                [2, 807, 488.25],
                [3, 807, 501.37, 817.63, 512, 830.75, 512],
                [2, 1089.25, 512],
                [3, 1102.37, 512, 1113, 501.37, 1113, 488.25],
                [2, 1113, 440.75],
                [3, 1113, 427.63, 1102.37, 417, 1089.25, 417],
                [2, 830.75, 417],
                [4]
            ],
            svg: false,
            vbwr: [807, 417, 1113, 512],
            vb: [807, 417, 1113, 512]
        },
        SmartShape_4: {
            type: 612,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'SmartShape_4c',
            retainState: false,
            immo: false,
            apsn: 'Slide8144',
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
                stsi: [8219]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        SmartShape_4c: {
            b: [808, 536, 1113, 631],
            uid: 8219,
            sr: cp.fd,
            ip: 'dr/SmartShape_4.png',
            dn: 'SmartShape_4',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'D ',
            traccstr: '',
            ti: -1,
            sc: '#00beff',
            sw: 0,
            ss: 0,
            fa: 100,
            bc: '#005f80',
            p0: [
                [0],
                [1, 831.75, 536],
                [3, 818.63, 536, 808, 546.63, 808, 559.75],
                [2, 808, 607.25],
                [3, 808, 620.37, 818.63, 631, 831.75, 631],
                [2, 1089.25, 631],
                [3, 1102.37, 631, 1113, 620.37, 1113, 607.25],
                [2, 1113, 559.75],
                [3, 1113, 546.63, 1102.37, 536, 1089.25, 536],
                [2, 831.75, 536],
                [4]
            ],
            svg: false,
            vbwr: [808, 536, 1113, 631],
            vb: [808, 536, 1113, 631]
        },
        Title_AutoShape_3: {
            type: 589,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'Title_AutoShape_3c',
            retainState: false,
            immo: false,
            apsn: 'Slide8144',
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
        Title_AutoShape_3c: {
            b: [0, 0, 1280, 101],
            uid: 8233,
            sr: cp.fd,
            ip: 'dr/Title_AutoShape_3.png',
            dn: 'Title_AutoShape_3',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'Hi ',
            traccstr: '',
            ti: -1,
            sc: '#0080ff',
            sw: 0,
            ss: 0,
            fa: 0,
            bc: '#bbedff',
            p0: [
                [0],
                [1, 25.25, 0],
                [3, 11.3, 0, 0, 11.3, 0, 25.25],
                [2, 0, 75.75],
                [3, 0, 89.70, 11.3, 101, 25.25, 101],
                [2, 1254.75, 101],
                [3, 1268.70, 101, 1280.00, 89.70, 1280.00, 75.75],
                [2, 1280.00, 25.25],
                [3, 1280.00, 11.3, 1268.70, 0, 1254.75, 0],
                [2, 25.25, 0],
                [4]
            ],
            svg: false,
            vbwr: [0, 0, 1280, 102],
            vb: [0, 0, 1280, 102]
        },
        Text_Caption_1: {
            type: 19,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'Text_Caption_1c',
            retainState: false,
            immo: false,
            apsn: 'Slide8144',
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
            b: [871, 645, 1279, 720],
            uid: 8256,
            sr: cp.fd,
            ip: 'dr/Text_Caption_1.png',
            dn: 'Text_Caption_1',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'Voilà! ',
            traccstr: '',
            ti: -1,
            vbwr: [871, 645, 1279, 720],
            vb: [871, 645, 1279, 720]
        },
        Image_2: {
            type: 15,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'Image_2c',
            retainState: false,
            immo: false,
            apsn: 'Slide8144',
            iflbx: false,
            ipflbx: true,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [8273]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        Image_2c: {
            b: [65, 249, 576, 561],
            uid: 8273,
            sr: cp.fd,
            ip: 'dr/8270_511_312.png',
            dn: 'Image_2',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            accstr: 'Image ',
            traccstr: '',
            ti: -1,
            vbwr: [65, 249, 576, 561],
            vb: [65, 249, 576, 561]
        },
        Slide8144: {
            lb: '',
            id: 8144,
            from: 91,
            to: 180,
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide8144c',
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
                n: 'SubTitle_AutoShape_1',
                t: 590
            }, {
                n: 'SmartShape_1',
                t: 612
            }, {
                n: 'SmartShape_2',
                t: 612
            }, {
                n: 'SmartShape_3',
                t: 612
            }, {
                n: 'SmartShape_4',
                t: 612
            }, {
                n: 'Title_AutoShape_3',
                t: 589
            }, {
                n: 'Text_Caption_1',
                t: 19
            }, {
                n: 'Image_2',
                t: 15
            }],
            iph: [],
            v: false,
            bc: '#5ce1ff',
            JSONTT_0: [],
            JSONTT_6: [],
            qs: ''
        },
        Slide8144c: {
            b: [0, 0, 0, 0],
            sr: cp.fd,
            uid: 8144,
            dn: 'Slide8144',
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
            rtbgfc: '#5ce1ff',
            rtbgsc: '#ffffff',
            rtbtnfc: '#003d54',
            rtbtnsc: '#003d54',
            rtsc: '#ffffff',
            rttc: '#ffffff',
            rttsc: '#005c7f',
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
                    [1, [2, 23]]
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
            htmlBgColor: '#baecfe',
            shc: false,
            pN: 'Example2'
        },
        project_main: {
            from: 1,
            to: 180,
            currentFrame: 1,
            useResponsive: false,
            responsiveType: 4,
            currentFrame: 1,
            useWidgetVersion7: false,
            isPublishedFromLacuna: false,
            slides: 'Slide4365,Slide8144',
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
                bc: '#baecfe',
                alpha: 100
            },
            FaceColor: {
                bc: '#005c7e',
                alpha: 100
            },
            GlowColor: {
                bc: '#005f7f',
                alpha: 100
            },
            IconColor: {
                bc: '#00beff',
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
            text: ['Example2 CPCluster-example']
        }, {
            link: 8144,
            text: ['How are you?', 'A', 'B', 'C', 'D', 'Hi', 'Voilà!']
        }],
        typekit: {
            kit_id: ''
        },
    };
    cp.model.projectImages = ['assets/htmlimages/Pause2x.gif', 'assets/htmlimages/Play2x.gif', 'assets/htmlimages/expand_icon.png', 'assets/htmlimages/gesturemobileicon@2x.png', 'assets/htmlimages/gesturemobilelandscape.png', 'assets/htmlimages/gesturetabletimage.png', 'assets/htmlimages/img_trans.gif', 'assets/htmlimages/placeholder.png'];
    cp.model.images = ['dr/8270_511_312.png', 'dr/SmartShape_1.png', 'dr/SmartShape_2.png', 'dr/SmartShape_3.png', 'dr/SmartShape_4.png', 'dr/SubTitle_AutoShape_1.png', 'dr/Text_Caption_1.png', 'dr/Title_AutoShape_2.png', 'dr/Title_AutoShape_3.png'];
    cp.model.videos = [];
    cp.model.slideVideos = [];
    cp.model.tocVideos = [];
    cp.model.audios = [];
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