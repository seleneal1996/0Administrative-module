var SampleJSONData = [
    {
        id: 0,
        title: 'Birds',
		isSelectable: false,
        subs: [
            {
                id: 1,
                title: 'Pigeon',
				isSelectable: false
            }, {
                id: 2,
                title: 'Parrot'
            }, {
                id: 3,
                title: 'Owl'
            }, {
                id: 4,
                title: 'Falcon'
            }
        ]
    }
];
var SampleJSONData2 = [
    {
        id: 1,
        title: 'Promedio Final',
		subs: [
			{
				id: 10,
				title: 'Conocimiento',
                subs: [
                    {
                        id: 13,
                        title: 'Parcial'
                    }, {
                        id: 14,
                        title: 'Final'
                    }
                ]
			}, {
				id: 11,
				title: 'Desempeño',
                subs: [
                    {
                        id: 15,
                        title: 'Práctica Clínica',
                        subs: [
                            {
                                id: 16,
                                title: 'Sesión 1'
                            }, {
                                id: 17,
                                title: 'Sesión 2'
                            }
                        ]
                    },  {
                        id: 510,
                        title: 'Promedio de talleres',
                        subs: [
                            {
                                id: 18,
                                title: 'Taller 1'
                            }, {
                                id: 19,
                                title: 'Taller 2'
                            }
                        ]
                    }, 
                ]
			}
		]
    }, {
        id: 2,
        title: 'Evaluación Virtual 1 <small class="text-virtual ms-1" title="Vinculado a LMS"><i class="bi bi-arrow-up-right-square"></i></small>',
       
    },
    {
        id: 3,
        title: 'Evaluación Virtual 2 <small class="text-virtual ms-1" title="Vinculado a LMS"><i class="bi bi-arrow-up-right-square"></i></small>',
       
    }
];


jQuery(document).ready(function($) {

  
    
    comboTree3 = $('#justAnInputBox1').comboTree({
        source : SampleJSONData,
        isMultiple: true,
        cascadeSelect: true,
        collapse: false
    });

    comboTree3.setSource(SampleJSONData2);


});