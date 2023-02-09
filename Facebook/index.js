$(document).ready(function () {
    $("#signup-forms").validate({

        rules: {
            fname: {
                maxlength: 8,
                minlength: 4,
                required: true
            },
            surname: {
                maxlength: 8,
                minlength: 4,
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            pws: {
                maxlength: 13,
                minlength: 8
            },
            mon: {
                required: true
            },
            day: {
                required: true
            },
            year: {
                required: true
            },
            gender: {
                required: true
            }
        },
        messages: {
            fname: {
                required: "enter first name",
                minlength: "enter atleast 4 characters",
                maxlength: "enter maximum 8 charcters"
            },
            surname: {
                required: "enter first name",
                minlength: "enter atleast 4 characters",
                maxlength: "enter maximum 8 charcters"
            },
            email: {
                required: "enter valid email address"
            },
            psw: {
                required: "enter atleast 8 - 13 characters"
            },
            mon: {
                required: "please enter month"
            },
            year: {
                required: "please enter year"
            },
            day: {
                required: "please enter birth day"
            },
            gender: {
                required: "please enter your gender"
            }

        }
    })
})
