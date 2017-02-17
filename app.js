//!///!///!//!///!///
/////////////////////
//    //
////////////////
///////////////

// Ensure DOM is loaded before running JS that may manipulate it
$( document ).ready(function() {
    var m = new Model();
    var c = new Controller(m);
    var v = new View(c, $("#output"));
});
