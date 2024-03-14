var SampleJSONData = [
    {
        id: 0,
        title: 'Evaluación 1'
    }, {
        id: 1,
        title: 'Birds',
		isSelectable: false,
        subs: [
            {
                id: 10,
                title: 'Pigeon',
				isSelectable: false
            }, {
                id: 11,
                title: 'Parrot'
            }, {
                id: 12,
                title: 'Owl'
            }, {
                id: 13,
                title: 'Falcon'
            }
        ]
    }, {
        id: 2,
        title: 'Rabbit'
    }, {
        id: 3,
        title: 'Fox'
    }, {
        id: 5,
        title: 'Cats',
        subs: [
            {
                id: 50,
                title: 'Kitty'
            }, {
                id: 51,
                title: 'Bigs',
                subs: [
                    {
                        id: 510,
                        title: 'Cheetah'
                    }, {
                        id: 511,
                        title: 'Jaguar'
                    }, {
                        id: 512,
                        title: 'Leopard'
                    }
                ]
            }
        ]
    }, {
        id: 6,
        title: 'Fish'
    }
];
var SampleJSONData2 = [
    {
        id: 0,
        title: 'Conjunto A',
		isSelectable: false,
        subs: [
            {
                id: 1,
                title: 'Grupo A1',
            }, {
                id: 2,
                title: 'Grupo A2'
            }, {
                id: 3,
                title: 'Grupo A3'
            }, {
                id: 4,
                title: 'Grupo A4'
            }
        ]
    }
];

jQuery(document).ready(function($) {

  
    
    comboTree3 = $('#justAnInputBox1').comboTree({
        source : SampleJSONData,
        isMultiple: true,
        cascadeSelect: true,
        collapse: false
    });

    comboTree4 = $('#justAnInputBox2').comboTree({
        source : SampleJSONData2,
        isMultiple: true,
        cascadeSelect: true,
        collapse: false
    });


});