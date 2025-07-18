import { Question } from "@/types/questions";

export const sampleQuestions: Question[] = [
  {
    id: "1",
    title: "Basic LED Blink",
    description: "Write a program to blink an LED connected to pin 13 every 500 milliseconds.",
    difficulty: "Beginner",
    tags: ["LED", "Digital Output", "Delay"],
    starterCode: `// Blink an LED on pin 13 every 500ms
// TODO: Complete the code below

void setup() {
  // Initialize pin 13 as output
  
}

void loop() {
  // Turn LED on
  
  // Wait 500ms
  
  // Turn LED off
  
  // Wait 500ms
  
}`,
    solution: `void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
}`,
    hints: [
      "Use pinMode() to set pin 13 as OUTPUT",
      "Use digitalWrite() to turn the LED on (HIGH) and off (LOW)",
      "Use delay() to wait for 500 milliseconds"
    ],
    expectedOutput: "LED should blink on and off every 500ms",
    testCases: [
      {
        id: "test1",
        name: "Pin Configuration",
        description: "Check if pin 13 is configured as OUTPUT",
        expectedBehavior: {
          type: "pin_state",
          pin: 13,
          expectedValue: true
        }
      },
      {
        id: "test2",
        name: "Timing Check",
        description: "Verify delay timing is approximately 500ms",
        expectedBehavior: {
          type: "timing",
          timing: {
            minMs: 450,
            maxMs: 550
          }
        }
      }
    ],
    judgeConfig: {
      requiredFunctions: ["pinMode", "digitalWrite", "delay"],
      maxExecutionTimeMs: 5000,
      requiredPins: [13]
    }
  },
  {
    id: "2",
    title: "Serial Communication",
    description: "Create a program that reads analog input from pin A0 and prints the value to Serial Monitor every second.",
    difficulty: "Beginner",
    tags: ["Serial", "Analog Input", "Sensors"],
    starterCode: `// Read analog value from A0 and print to Serial
// TODO: Complete the code below

void setup() {
  // Initialize serial communication
  
}

void loop() {
  // Read analog value from pin A0
  
  // Print the value to Serial Monitor
  
  // Wait 1 second
  
}`,
    solution: `void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);
  Serial.print("Sensor Value: ");
  Serial.println(sensorValue);
  delay(1000);
}`,
    hints: [
      "Use Serial.begin(9600) to initialize serial communication",
      "Use analogRead(A0) to read from analog pin A0",
      "Use Serial.print() and Serial.println() to output to Serial Monitor"
    ],
    expectedOutput: "Sensor values should be printed to Serial Monitor every second",
    testCases: [
      {
        id: "test1",
        name: "Serial Initialization",
        description: "Check if Serial communication is properly initialized",
        expectedBehavior: {
          type: "serial_output",
          pattern: ".*"
        }
      },
      {
        id: "test2",
        name: "Analog Reading",
        description: "Verify analogRead is used for pin A0",
        expectedBehavior: {
          type: "serial_output",
          pattern: "Sensor|Value|\\d+"
        }
      },
      {
        id: "test3",
        name: "Timing Check",
        description: "Verify 1 second delay between readings",
        expectedBehavior: {
          type: "timing",
          timing: {
            minMs: 900,
            maxMs: 1100
          }
        }
      }
    ],
    judgeConfig: {
      requiredFunctions: ["Serial.begin", "analogRead", "Serial.print"],
      maxExecutionTimeMs: 5000
    }
  },
  {
    id: "3",
    title: "PWM LED Fade",
    description: "Write a program to fade an LED in and out using PWM on pin 9.",
    difficulty: "Intermediate",
    tags: ["PWM", "LED", "Analog Output"],
    starterCode: `// Fade LED in and out using PWM
// TODO: Complete the code below

int brightness = 0;
int fadeAmount = 5;

void setup() {
  // Pin 9 is PWM capable, no setup needed
}

void loop() {
  // Set LED brightness using PWM
  
  // Change brightness for next iteration
  
  // Reverse fade direction at limits
  
  // Small delay for smooth fading
  
}`,
    solution: `int brightness = 0;
int fadeAmount = 5;

void setup() {
  // Pin 9 is PWM capable, no setup needed
}

void loop() {
  analogWrite(9, brightness);
  brightness += fadeAmount;
  
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  
  delay(30);
}`,
    hints: [
      "Use analogWrite() to set PWM value (0-255)",
      "Increment brightness by fadeAmount each loop",
      "Reverse fadeAmount when reaching 0 or 255",
      "Use a small delay for smooth fading effect"
    ],
    expectedOutput: "LED should smoothly fade in and out continuously",
    testCases: [
      {
        id: "test1",
        name: "PWM Usage",
        description: "Check if analogWrite is used for PWM control",
        expectedBehavior: {
          type: "pwm_value",
          pin: 9,
          expectedValue: 128,
          tolerance: 50
        }
      },
      {
        id: "test2",
        name: "Fade Timing",
        description: "Verify smooth fading with appropriate delay",
        expectedBehavior: {
          type: "timing",
          timing: {
            minMs: 20,
            maxMs: 50
          }
        }
      }
    ],
    judgeConfig: {
      requiredFunctions: ["analogWrite"],
      maxExecutionTimeMs: 5000,
      requiredPins: [9]
    }
  },
  {
    id: "4",
    title: "Button with Debouncing",
    description: "Create a program that toggles an LED when a button is pressed, with proper debouncing.",
    difficulty: "Intermediate",
    tags: ["Button", "Debouncing", "Digital Input"],
    starterCode: `// Toggle LED with debounced button press
// TODO: Complete the code below

const int buttonPin = 2;
const int ledPin = 13;

int buttonState = 0;
int lastButtonState = 0;
bool ledState = false;
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50;

void setup() {
  // Setup pins
  
}

void loop() {
  // Read button state
  
  // Check if button state changed
  
  // Debounce logic
  
  // Toggle LED if button pressed
  
}`,
    solution: `const int buttonPin = 2;
const int ledPin = 13;

int buttonState = 0;
int lastButtonState = 0;
bool ledState = false;
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int reading = digitalRead(buttonPin);
  
  if (reading != lastButtonState) {
    lastDebounceTime = millis();
  }
  
  if ((millis() - lastDebounceTime) > debounceDelay) {
    if (reading != buttonState) {
      buttonState = reading;
      
      if (buttonState == LOW) {
        ledState = !ledState;
        digitalWrite(ledPin, ledState);
      }
    }
  }
  
  lastButtonState = reading;
}`,
    hints: [
      "Use INPUT_PULLUP for the button pin",
      "Track button state changes to detect presses",
      "Use millis() for timing-based debouncing",
      "Toggle LED state only on button press (LOW with pullup)"
    ],
    expectedOutput: "LED should toggle each time button is pressed, without multiple triggers",
    testCases: [
      {
        id: "test1",
        name: "Pin Configuration",
        description: "Check if button and LED pins are properly configured",
        expectedBehavior: {
          type: "pin_state",
          pin: 2,
          expectedValue: true
        }
      },
      {
        id: "test2",
        name: "Debouncing Logic",
        description: "Verify debouncing implementation using millis()",
        expectedBehavior: {
          type: "timing",
          timing: {
            minMs: 40,
            maxMs: 60
          }
        }
      }
    ],
    judgeConfig: {
      requiredFunctions: ["pinMode", "digitalRead", "digitalWrite", "millis"],
      maxExecutionTimeMs: 5000,
      requiredPins: [2, 13]
    }
  }
];