$(function(){
    $('#calc').click(function(){
        const mo_analise = parseFloat($('#MO_analise').val());
        const mo_ideal = parseFloat($('#MO_ideal').val());
        const defitt_ = mo_ideal - mo_analise;
        const defitt = defitt_.toString().replace(".", ",") +" %";
        const ppmd_ = (mo_ideal - mo_analise) * 10000 + " ppm"
        const ppmd = ppmd_.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        const kghade_ = ((mo_ideal - mo_analise) * 2 * 10000);
        const kghade = kghade_.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")+ " kg/ha de M.O.";
        $('#defitt').val(defitt)
        $('#ppmd').val(ppmd)
        $('#kghade').val(kghade)
    })
})