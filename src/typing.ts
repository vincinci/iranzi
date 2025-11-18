// Typing Animation Effect
export class TypingAnimation {
    private typedTextElement: HTMLElement | null;
    private texts: string[] = [
        'Frontend Developer',
        'UI/UX Designer',
        'Figma Expert',
        'React Specialist',
        'Design Systems Builder'
    ];
    private currentTextIndex: number = 0;
    private currentCharIndex: number = 0;
    private isDeleting: boolean = false;
    private typingSpeed: number = 100;
    private deletingSpeed: number = 50;
    private pauseTime: number = 2000;

    constructor() {
        this.typedTextElement = document.querySelector('.typed-text');
    }

    public init(): void {
        if (this.typedTextElement) {
            setTimeout(() => this.type(), 1000);
        }
    }

    private type(): void {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.currentCharIndex--;
            this.typedTextElement!.textContent = currentText.substring(0, this.currentCharIndex);
            
            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                setTimeout(() => this.type(), 500);
                return;
            }
            
            setTimeout(() => this.type(), this.deletingSpeed);
        } else {
            this.currentCharIndex++;
            this.typedTextElement!.textContent = currentText.substring(0, this.currentCharIndex);
            
            if (this.currentCharIndex === currentText.length) {
                this.isDeleting = true;
                setTimeout(() => this.type(), this.pauseTime);
                return;
            }
            
            setTimeout(() => this.type(), this.typingSpeed);
        }
    }
}
