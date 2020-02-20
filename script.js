function take(number, length, retake) {
    number = number + "";
    if (number.length < length) {
        for (var i = number.length; i < length; i += 1) {
            number = retake + number;
        }
    }

    return number;
}


