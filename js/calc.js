$(function(){
    $('#calc').click(function(){
        const milhas = parseFloat($('#MO_analise').val());
        const mo_ideal = parseFloat($('#MO_ideal').val());
        const metros_ = mo_ideal - milhas;
        const metros = metros_.toString().replace(".", ",") +" %";
        const ppmd_ = (mo_ideal - milhas) * 10000 + " ppm"
        const ppmd = ppmd_.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        const kghade_ = ((mo_ideal - milhas) * 2 * 10000);
        const kghade = kghade_.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")+ " kg/ha de M.O.";
        $('#metros').val(metros)
        $('#ppmd').val(ppmd)
        $('#kghade').val(kghade)
        
    })
})
