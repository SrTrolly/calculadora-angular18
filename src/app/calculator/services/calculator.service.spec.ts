import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";


describe('CalculatorService', () => {

    let service: CalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CalculatorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be created with default values', () => {

        expect(service.resultText()).toBe('0');
        expect(service.subResultText()).toBe('0');
        expect(service.lastOperator()).toBe('+');

    });

    it('should set resultText to "0" when c is pressed', () => {
        service.resultText.set('123');
        service.subResultText.set('456');
        service.lastOperator.set('*');

        service.construcNumber('C');

        expect(service.resultText()).toBe('0');
        expect(service.subResultText()).toBe('0');
        expect(service.lastOperator()).toBe('+');

    });

    it('shoudl update  resultText with number Input', () => {
        service.construcNumber('1');
        expect(service.resultText()).toBe('1');

        service.construcNumber('2');
        expect(service.resultText()).toBe('12');
    });

    it('should handle operators correctly', () => {

        service.construcNumber('1');
        service.construcNumber('+');

        expect(service.subResultText()).toBe('1');
        expect(service.lastOperator()).toBe('+');
        expect(service.resultText()).toBe('0');
    });

    it('should calculare result correctrly for addition', () => {
        service.construcNumber('1');
        service.construcNumber('+');
        service.construcNumber('2');
        service.construcNumber('=');

        expect(service.resultText()).toBe('3');
    });

    it('should calculare result correctrly for subtraction', () => {
        service.construcNumber('5');
        service.construcNumber('-');
        service.construcNumber('2');
        service.construcNumber('=');

        expect(service.resultText()).toBe('3');
    });
    it('should calculare result correctrly for multiply', () => {
        service.construcNumber('5');
        service.construcNumber('*');
        service.construcNumber('2');
        service.construcNumber('=');

        expect(service.resultText()).toBe('10');
    });
    it('should calculare result correctrly for spliting', () => {
        service.construcNumber('1');
        service.construcNumber('0');
        service.construcNumber('/');
        service.construcNumber('2');
        service.construcNumber('=');

        expect(service.resultText()).toBe('5');
    });

    it('should handle decimal point correctly', () => {
        service.construcNumber('1');
        service.construcNumber('.');
        service.construcNumber('5');

        expect(service.resultText()).toBe('1.5');
        service.construcNumber('.');
        expect(service.resultText()).toBe('1.5');
    });

    it('should handle sign change correctly', () => {
        service.construcNumber('1');
        service.construcNumber('+/-');

        expect(service.resultText()).toBe('-1');
        service.construcNumber('+/-');
        expect(service.resultText()).toBe('1');

    });

    it('should handle backspace correctly', () => {
        service.resultText.set('123');

        service.construcNumber('Backspace');
        expect(service.resultText()).toBe('12');

        service.construcNumber('Backspace');
        expect(service.resultText()).toBe('1');

        service.construcNumber('Backspace');
        expect(service.resultText()).toBe('0');

    });

    it('should handle max length correctly', () => {

        for (let index = 0; index < 10; index++) {
            service.construcNumber('1');
        }

        expect(service.resultText().length).toBe(10);

        service.construcNumber('1');
        expect(service.resultText().length).toBe(10);

    });

});