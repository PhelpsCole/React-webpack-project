import { classNames } from './classNames';

describe('classNames', () => {
    test('One param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('Additional class', () => {
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        )).toBe('someClass class1 class2');
    });
    test('Mods', () => {
        expect(
            classNames(
                'someClass',
                { hovered: true, scrollable: true },
                ['class1', 'class2'],
            ),
        ).toBe('someClass class1 class2 hovered scrollable');
    });
    test('Mods false', () => {
        expect(
            classNames(
                'someClass',
                { hovered: true, scrollable: false },
                ['class1', 'class2'],
            ),
        ).toBe('someClass class1 class2 hovered');
    });
    test('Mods undefined', () => {
        expect(
            classNames(
                'someClass',
                { hovered: true, scrollable: undefined },
                ['class1', 'class2'],
            ),
        ).toBe('someClass class1 class2 hovered');
    });
});
