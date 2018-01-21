/* *** MENU MOBILE *** */
$("#nav-mob").click(function(){
	$("#nav").toggleClass("active");
	$("body").toggleClass("no-scroll");
});


/* *** DATEPICKER *** */
$( function() {
var dateFormat = "mm/dd/yy",
  today = new Date(),
  days = [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
  months = [ "Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Jui", "Aout", "Sep", "Oct", "Nov", "Déc" ],
  start = $( "#start-date" )
    .datepicker({
      changeMonth: true,
      numberOfMonths: 1,
      minDate: today,
      dayNamesMin: days,
      monthNamesShort: months,
      hideIfNoPrevNext: true
    })
    .on( "change", function() {
      end.datepicker( "option", "minDate", getThisDate( this ) );
    }),
  end = $( "#end-date" ).datepicker({
    changeMonth: true,
    numberOfMonths: 1,
      dayNamesMin: days,
      monthNamesShort: months,
      hideIfNoPrevNext: true
  })
  .on( "change", function() {
    start.datepicker( "option", "maxDate", getThisDate( this ) );
  });

function getThisDate( element ) {
  var date;
  try {
    date = $.datepicker.parseDate( dateFormat, element.value );

  } catch( error ) {
    date = null;
  }

  return date;
}
} );