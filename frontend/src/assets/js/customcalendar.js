document.addEventListener('DOMContentLoaded', function() {
 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        initialViews = 'listWeek';
    }else{
        initialViews = 'dayGridMonth';
    }   
  
  var calendarEl = document.getElementById('calendar');
  var today = moment().day();
  
  var calendar = new FullCalendar.Calendar(calendarEl, {
    

    locale: 'es',
    
      headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth'
      },
      
      buttonText:    {
      today:    'Today',
      month:    'Mes',
      week:     'Semana',
      day:      'Día',
      list:     'Lista'
    },
    
    
          navLinks: true,
          firstDay: 1,
          hiddenDays: [ 0 ],
          initialView: initialViews,

          visibleRange: {
            start: '2023-03-26',
            end: '2023-12-31'
          },
          validRange: {
            start: '2023-03-26',
            end: '2023-12-31'
          },
          
            editable: true,
            selectable: false, 
            unselectAuto:true,
            eventOverlap: false,
            eventColor: '#f16621', 
            slotDuration: '00:15',
            allDaySlot : false,
            eventStartEditable: false,
            eventDurationEditable:false,
            slotLabelInterval: "00:15",
            longPressDelay: 0,
            nowIndicator: "true", //indicator of current time
            slotMinTime: '07:00',
            slotMaxTime: '20:45',
            eventContent: function( arg ) {
          return { html: arg.event.title };
      },
      eventDidMount: function(info) {
        $(info.el).tooltip({ 
          title: info.event.extendedProps.description,
          placement: "top",
          trigger: "hover",
          container: "body",
          html: true,
        });
      },
      events: [
        {
          id: '1',
          title: '<span>PRÁCTICA CLÍNICA</span><br><strong>PP1</strong>',
          start: '2023-04-10 07:00:00',
          end: '2023-04-10 08:00:00',
          description: ' <ul><li >Nombre:<strong> Nombre de evaluación completo</strong></li><li >Periodo:<strong> 2023-1 </strong><li >Fecha de vencimiento:<strong> 17/05/2023 </strong></li><li >Nivel de formación: <strong>  PREGADO </strong> </li> <li >Docente coordinador: <strong>Mariano Alcazar V.</strong> </li><li >Créditos: <strong>5</strong> </li></ul>',

        },
        {
          id: '2',
          title: '<span>EVALUACIÓN CONTINUA</span><br><strong>PD1</strong>',
          start: '2023-04-14 09:00:00',
          end: '2023-04-14 10:30:00',
          description: ' <ul><li >Nombre:<strong> Nombre de evaluación completo</strong></li><li >Periodo:<strong> 2023-1 </strong><li >Fecha de vencimiento:<strong> 17/05/2023 </strong></li><li >Nivel de formación: <strong>  PREGADO </strong> </li> <li >Docente coordinador: <strong>Mariano Alcazar V.</strong> </li><li >Créditos: <strong>5</strong> </li></ul>',

 
        },

        {
          id: '3',
          title: '<span>EVALUACIÓN CONTINUA</span><br><strong>PP1</strong>',
          start: '2023-04-14 11:00:00',
          end: '2023-04-14 12:00:00',
          description: ' <ul><li >Nombre:<strong> Nombre de evaluación completo</strong></li><li >Periodo:<strong> 2023-1 </strong><li >Fecha de vencimiento:<strong> 17/05/2023 </strong></li><li >Nivel de formación: <strong>  PREGADO </strong> </li> <li >Docente coordinador: <strong>Mariano Alcazar V.</strong> </li><li >Créditos: <strong>5</strong> </li></ul>',

 
        }
        // more events ...
      ],


          // events: 'https://fullcalendar.io/demo-events.json'
    });

   
    calendar.render();

    var cdate = calendar.getDate();
    var cmonth = cdate.toLocaleString('default', { month: 'long' });
    var cyear = + cdate.getFullYear();

    $( ".fc-cmonth-button " ).html( `<p class="mb-0 text-uppercase pt-1">${cmonth} ${cyear} </p>` );

    $(".fc-next-button , .fc-prev-button").on('click', function() {
      var cdate = calendar.getDate();
      var cmonth = cdate.toLocaleString('default', { month: 'long' });
      var cyear = + cdate.getFullYear();
      console.log(cmonth + cyear);

      $( ".fc-cmonth-button" ).html( `<p class="mb-0 text-uppercase pt-1">${cmonth} ${cyear}</p>` );
    });
   
    

    if ($(window).width() < 1000) {
      calendar.changeView('listWeek');
    }

   
   
});
