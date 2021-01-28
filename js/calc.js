$(function(){
    $('#calc').click(function(){
        const milhas = parseFloat($('#MO_analise').val())
        const mo_ideal = parseFloat($('#MO_ideal').val())
        const metros_ = mo_ideal - milhas +"%"
        const metros = metros_.toString().replace(".", ",");
        const metros2 = mo_ideal + milhas +" %"
        const ppmd_ = (mo_ideal - milhas) * 10000 + " ppm"
        const ppmd = ppmd_.toString().replace(".", ",");
        const kghade_ = ((mo_ideal - milhas) * 2 * 10000) + " kg/ha de Matéria orgânica"
        const kghade = kghade_.toString().replace(".", ",");
        $('#metros').val(metros)
        $('#ppmd').val(ppmd)
        $('#kghade').val(kghade)
        
    })
})

