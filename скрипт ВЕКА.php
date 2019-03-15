add_filter('gettext', 'translate_text');
add_filter('ngettext', 'translate_text');

function translate_text($translated) {
$translated = str_ireplace('Применить купон', 'Применить скидку', $translated);
$translated = str_ireplace('У вас есть купон? Нажмите здесь для введения кода', 'также', $translated);
$translated = str_ireplace('Код купона', 'Код скидки', $translated);
$translated = str_ireplace('Salient', 'хрен', $translated);

return $translated;
}