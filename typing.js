// Typing Animation Effect
export class TypingAnimation {
    constructor() {
        this.texts = [
            'Frontend Developer',
            'UI/UX Designer',
            'Figma Expert',
            'React Specialist',
            'Design Systems Builder'
        ];
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typingSpeed = 100;
        this.deletingSpeed = 50;
        this.pauseTime = 2000;
        this.typedTextElement = document.querySelector('.typed-text');
    }
    init() {
        if (this.typedTextElement) {
            setTimeout(() => this.type(), 1000);
        }
    }
    type() {
        const currentText = this.texts[this.currentTextIndex];
        if (this.isDeleting) {
            this.currentCharIndex--;
            this.typedTextElement.textContent = currentText.substring(0, this.currentCharIndex);
            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                setTimeout(() => this.type(), 500);
                return;
            }
            setTimeout(() => this.type(), this.deletingSpeed);
        }
        else {
            this.currentCharIndex++;
            this.typedTextElement.textContent = currentText.substring(0, this.currentCharIndex);
            if (this.currentCharIndex === currentText.length) {
                this.isDeleting = true;
                setTimeout(() => this.type(), this.pauseTime);
                return;
            }
            setTimeout(() => this.type(), this.typingSpeed);
        }
    }
}
//# sourceMappingURL=typing.js.map