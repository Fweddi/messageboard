const stringifyFormData = require('./stringify_form_data');

let formData = new FormData();
formData.append("username", "foo");
formData.append("password", "Special1!");

test('stringifies form data', () => {
    expect(stringifyFormData(formData)).toBe("{\n \ \"username\": \"foo\",\n \ \"password\": \"Special1!\"\n}");
});