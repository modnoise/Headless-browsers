describe("DOM_Tests", function() {
var el = document.createElement("div");
    el.id = "myDiv";
    el.innerHTML = "Hi there!";
    el.style.background = "#ccc";
    document.body.appendChild(el);

    var myEl = document.getElementById('myDiv');
    it("is in the DOM", function () {
        expect(myEl).not.toBeNull();
    });

    it("is a child of the body", function () {
        expect(myEl.parentElement).toBe(document.body);
    });

    it("has the right text", function () {
        expect(myEl.innerHTML).toEqual("Hi there!");
    });

    it("has the right background", function () {
        expect(myEl.style.background).toEqual("rgb(204, 204, 204)");
    });
    it ("should map some values", function() {
    var array = [1,2,3];
    var results = DOM_Tests.map(array, function(item) {
      return item * 2;
    });

    expect(results).toEqual([2,4,6]);
  });

  it ("should reduce some values", function() {
    var array = [1,2,3];
    var result = DOM_Tests.reduce(array, 0, function(acc, item){
      return acc + item;
    });

    expect(result).toEqual(6);
  });

  it ("should fail for the example", function() {
    expect(false).toBeTruthy();
  });
});