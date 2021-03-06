
describe('app', function ()
{
    'use strict';

    var exercise = window.app;

    describe('upperCase', function () {
        it('should converts the first letter each word in upper case', function () {
            expect(exercise.upperCase('This is a sentence')).toBe('This Is A Sentence');
            expect(exercise.upperCase('To jest wlasnie Karol')).toBe('To Jest Wlasnie Karol');
        });
        it('should not change upper case letter', function () {
            expect(exercise.upperCase('ThisIs Hard')).toBe('ThisIs Hard');
            expect(exercise.upperCase('ToJest Karol')).toBe('ToJest Karol');
        });
        it('should not change punctuation', function () {
            expect(exercise.upperCase('This ism Hard')).toBe('This Ism Hard');
            expect(exercise.upperCase('To jest Karol')).toBe('To Jest Karol');
        });
    });

    describe('findAlmostMax', function () {
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([2, 3, 4])).toBe(3);
            expect(exercise.findAlmostMax([10, 12, 8])).toBe(12);
        });
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([50, 40, 30, 10])).toBe(40);
            expect(exercise.findAlmostMax([50, 45, 30, 10])).toBe(45);
        });
        it('string should be omnitted', function () {
            expect(exercise.findAlmostMax([50,'str', 30, 10])).toBe(30);
            expect(exercise.findAlmostMax([80,'str', 60, 50])).toBe(60);
        });
        it('empty array should return false', function () {
            expect(exercise.findAlmostMax([])).toEqual(false);
            expect(exercise.findAlmostMax([])).toEqual(false);
        });
        it('array of string should return false', function () {
            expect(exercise.findAlmostMax(['cat', 'kot'])).toEqual(false);
            expect(exercise.findAlmostMax(['dog', 'pies'])).toEqual(false);
        });
    });
});
