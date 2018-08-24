//(xxx) xxx-xxxx format code
$(document).ready(function () {
    $('#telefone').usPhoneFormat({
        format: '(xxx) xxx-xxxx',
    });
});

OR
//xxx-xxx-xxxx format code
$(document).ready(function () {
    $('#telefone').usPhoneFormat({
        format: 'xxx-xxx-xxxx',
    });
});

//Default xxx-xxx-xxxx
$(document).ready(function () {
    $('#telefone').usPhoneFormat();
});