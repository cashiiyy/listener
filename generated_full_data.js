
        /* ============================================================
         * DEFAULT EXTRACTED DATA FROM GOOGLE SHEETS
         * ============================================================ */
        function getInitialClasses() {
            return [
                {
                    id: 'ML',
                    subject: 'Machine Learning',
                    teacher: 'ML Instructor',
                    language: 'ml',
                    languageName: 'Malayalam & English',
                    status: 'done',
                    chunksCount: 4,
                    duration: '40 min (4 chunks)',
                    date: 'Sep 23, 2026',
                    timestamp: 1790183572672,
                    type: 'live'
                },
                {
                    id: 'test11',
                    subject: 'System Diagnostics & Voice Test',
                    teacher: 'Instructor',
                    language: 'ml',
                    languageName: 'Malayalam',
                    status: 'done',
                    chunksCount: 1,
                    duration: '10 min (1 chunk)',
                    date: 'Sep 27, 2026',
                    timestamp: 1790493114796,
                    type: 'live'
                },
                {
                    id: 'Fast api',
                    subject: 'FastAPI Backend Architecture',
                    teacher: 'Instructor',
                    language: 'en',
                    languageName: 'English',
                    status: 'done',
                    chunksCount: 1,
                    duration: '~15 min (Finalized)',
                    date: 'Sep 27, 2026',
                    timestamp: 1790500000000,
                    type: 'live'
                }
            ];
        }

        function getInitialStudySessions() {
            return {
          "ML": {
                    "classId": "ML",
                    "title": "Machine Learning — Decision Trees & ID3 Algorithm (Entropy and Information Gain)",
                    "badge": "🤖 AI TUTOR SESSION",
                    "subject": "Machine Learning",
                    "teacher": "ML Instructor",
                    "module": "Module 1 & 2: Decision Tree Induction & Concept Learning",
                    "date": "Sep 23, 2026",
                    "duration": "40 min (4 chunks)",
                    "topics": [
                              "Machine Learning Fundamentals",
                              "Decision Trees Representation",
                              "ID3 Algorithm (Iterative Dichotomiser 3)",
                              "Entropy Formulation: E(S)",
                              "Information Gain: Gain(S, A)",
                              "Root Node Selection Criteria",
                              "Multi-Attribute Splits (Outlook, Temp, Humidity, Wind)"
                    ],
                    "summary": "The lecture continues discussing the calculation of entropy and information gain for decision tree construction using the ID3 algorithm. The instructor demonstrates how to calculate the entropy of individual attributes like Sunny, Overcast, and Rain, and explains the formula for Information Gain (Entropy of parent minus the sum of child proportions multiplied by child entropies). After computing the information gain values for the four features (yielding 0.246, 0.29, 0.16, and 0.047), the instructor explains that the feature with the highest information gain is selected as the root node. The session concludes with taking attendance.",
                    "keyPoints": [
                              "To find the information gain of a feature like Outlook, first calculate the total entropy of the dataset, then calculate the entropy of each attribute/child of that feature.",
                              "Information gain is calculated using the formula: Entropy of all data - sum(Child proportion * Entropy of Child).",
                              "Other features like Temperature, Humidity, and Wind must also have their information gains calculated similarly.",
                              "The feature with the highest information gain value is chosen as the root node.",
                              "ID3 decision tree algorithm is an important concept for exams where problems are asked."
                    ],
                    "concepts": [
                              "Entropy Calculation",
                              "Information Gain",
                              "ID3 Algorithm (Decision Tree Algorithm)",
                              "Root Node Selection"
                    ],
                    "definitions": [
                              "ID3 Algorithm: A decision tree algorithm used to represent normal training data in tree form to determine decisions best.",
                              "Information Gain: Calculated by subtracting the child proportions weighted by their entropies from the parent entropy (entropy of all data)."
                    ],
                    "formulas": [
                              "Entropy = -p(pos) log2 p(pos) - p(neg) log2 p(neg)",
                              "Information Gain = Entropy(Parent) - sum((Child / Parent) * Entropy(Child))"
                    ],
                    "examples": [
                              "Entropy of Sunny = -2/5 log2(2/5) - 3/5 log2(3/5)",
                              "Information Gain values for the four features: 0.246, 0.29, 0.16, and 0.047"
                    ],
                    "teacherEmphasis": "ID3 algorithm and decision tree problems are important and frequently asked in exams.",
                    "mandatoryTasks": [
                              "Calculate the entropies and information gains for the remaining features (Temperature, Humidity, and Wind)."
                    ],
                    "qas": [
                              {
                                        "q": "Q1: How does the ID3 algorithm select the root node of the decision tree?",
                                        "a": "ID3 computes the Information Gain for each candidate attribute (in our lecture calculation: Outlook = 0.246, Temperature = 0.29, Humidity = 0.16, Wind = 0.047). The attribute that yields the highest Information Gain is selected as the decision tree's root node."
                              },
                              {
                                        "q": "Q2: What is the mathematical formulation of Information Gain used in class?",
                                        "a": "Information Gain = Entropy(Parent) - Σ ((Child / Parent) * Entropy(Child)), where child proportions weight the subset entropies."
                              },
                              {
                                        "q": "Q3: How was the entropy of the attribute Outlook = 'Sunny' computed?",
                                        "a": "Sunny had 5 total samples with 2 positive and 3 negative outcomes: Entropy(Sunny) = - (2/5) log2(2/5) - (3/5) log2(3/5) ≈ 0.971."
                              }
                    ],
                    "actionItems": [
                              "Mandatory Homework: Calculate entropies and information gain for Temperature, Humidity, and Wind.",
                              "Textbook Reading: Review Decision Tree Induction in 'Ml_text.pdf' (Drive ID: 1uzD4Oc1ErNH0fxgPBGTNDh1E02s7ZESC).",
                              "Exam Preparation: Solve Decision Tree numericals from KTU previous papers in the connected Google Drive folder."
                    ],
                    "sources": [
                              {
                                        "source_id": "ml-main",
                                        "title": "Ml_text",
                                        "subject": "Machine Learning",
                                        "active": "TRUE",
                                        "drive_file_id": "1uzD4Oc1ErNH0fxgPBGTNDh1E02s7ZESC",
                                        "description": "Main 80-page ML textbook",
                                        "priority": "1"
                              },
                              {
                                        "source_id": "ml-mod1-ref",
                                        "title": "ML_MODULE1",
                                        "subject": "Machine Learning",
                                        "active": "TRUE",
                                        "drive_file_id": "1JCn5IAvfMO2djGebi0EDR4B8Cv24dnL1",
                                        "description": "Additional reference textbook",
                                        "priority": "2"
                              }
                    ],
                    "driveFolderUrl": "https://drive.google.com/drive/folders/123RR15HDo-g5vtK4177LhVYNXqb0QhFO?usp=drive_link",
                    "transcripts": [
                              {
                                        "seq": 1,
                                        "filename": "chunk_000",
                                        "drive_file_id": "1CczNv6gppTa8hUqjfAoTpFMxx2w5Cc-M",
                                        "created_at": "2026-09-23T18:01:33.346Z",
                                        "text": "Machine learning class test one 23/9 എല്ലാവരും ഒന്ന് നോക്കിയേ ഞാൻ ആ ഗ്രൂപ്പിൽ ഒരു എക്സാമ്പിൾ ഇട്ടിട്ടുണ്ടേ. ഞാൻ ഇത് പറയണത്തിനുവേണ്ടിയാ നിങ്ങൾ ആരും ശ്രദ്ധിക്കുന്നതായിട്ട് എനിക്ക് തോന്നുന്നില്ല. ആ എക്സാമ്പിൾ ഒന്ന് നോക്കിയേ എല്ലാവരും. അപ്പൊ അതിനകത്തുനിന്ന് ആ ഡാറ്റ സെറ്റിൽ നമ്മൾ ഈ പറഞ്ഞപോലെ വെച്ചിട്ട് റെപ്രസന്റ് ചെയ്യാൻ പോവുകയാണ്. ഇത് ആദ്യം നമ്മൾ എന്താ ചെയ്യേണ്ടത്? ഫസ്റ്റ് ആ ഡാറ്റ സെറ്റിനകത്തുനിന്ന് ഏതാണ് നമ്മുടെ പേരന്റ് നോഡ് എന്നുള്ളത് കണ്ടുപിടിക്കണം. അത് കണ്ടുപിടിക്കാൻ വേണ്ടിയിട്ട് നമ്മൾ അതിനകത്തുള്ള എല്ലാ ഫീച്ചേഴ്സിന്റെയും എൻട്രോപ്പിയും ഇൻഫർമേഷൻ ഗെയിനും നമ്മൾ കണ്ടുപിടിക്കണം. അപ്പൊ അതാണ് നമ്മൾ ഫസ്റ്റ് ചെയ്യാൻ പോകുന്നത്. ക്വസ്റ്റ്യൻ എല്ലാവർക്കും കിട്ടിയോ? നോക്കിയോ? അപ്പൊ അത് നമുക്ക് ഫസ്റ്റ് അപ്പൊ ഇതിന്റെ ഇക്വേഷൻ നിങ്ങൾക്ക് കുറച്ചുകൂടെ മനസ്സിലാകും. ഞാൻ അതൊന്നു കൂടെ പറയാം. 14 ഡേയ്സ് ഉണ്ട് അതുപോലെ എത്ര ഫീച്ചേഴ്സ് ഉണ്ട് അതിനകത്ത്? എത്ര ഫീച്ചേഴ്സ് ഉണ്ട്? നാല് ഫീച്ചേഴ്സ് ഉണ്ട് വെതർ ഉണ്ട് ടെംപറേച്ചർ, ഹ്യുമിഡിറ്റി, വിൻഡ് അങ്ങനെ നാല് ഫീച്ചേഴ്സ് ഉണ്ട്. അപ്പൊ ഈ നാല് ഫീച്ചേഴ്സിൽ ഏത് ഫീച്ചറാണ് നമ്മൾ ഈ ഡാറ്റ സെറ്റിനെ ശരിക്കും പറഞ്ഞാൽ ഡിസിഷన్ ട്രീ ഫോമിൽ നമ്മൾ റെപ്രസന്റ് ചെയ്യാനാണ് പോകുന്നത്. അപ്പൊ അതിൽ ഒരു ട്രീ റെപ്രസന്റേഷനിൽ നമ്മൾ ഏറ്റവും ആദ്യം എന്താ വേണ്ടത്? നമുക്കൊരു റൂട്ട് നോഡ് വേണം. അപ്പൊ നമ്മൾ ഇനി ഇതിൽ ഏത് ഫീച്ചറാണ് നമ്മൾ റൂട്ട് നോഡ് ആയിട്ട് സെലക്ട് ചെയ്യുന്നത് എന്നുള്ളതാണ് നമ്മൾ കണ്ടുപിടിക്കാൻ പോകുന്നത്. അപ്പൊ അതിന് ആദ്യം വേണ്ടത് എന്ന് പറഞ്ഞാൽ നമ്മൾ ഇൻഫർമേഷൻ ഗെയിൻ ഓഫ് വെതർ ആദ്യം വെതറിനെ വെതർ അതിനകത്ത് വെതർ എന്ന് പോകുന്നുണ്ടോ? ഞാൻ വെതർ എന്നല്ലേ പറയുന്നത് ഞാൻ ശരിക്കും അപ്പൊ വെതർ ഔട്ട്‌ലുക്കിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ ആണ് നമ്മൾ ഇനി കണ്ടുപിടിക്കാൻ പോകുന്നത്. അതിൽ ഫസ്റ്റ് സ്റ്റെപ്പ് എന്ന് പറയുന്നത് എന്താണ്? റൂട്ട് നോഡ് ഐഡന്റിഫൈ ചെയ്യാൻ പോവുകയാണ്. അതിൽ ഫസ്റ്റ് എന്ന് പറയുന്നത് ഇൻഫർമേഷൻ ഗെയിన్ ഓഫ് ആദ്യം നമ്മൾ ഈ ഒരു പ്രോസസ് ആണ് ചെയ്യാൻ പോകുന്നത്. അപ്പൊ അതിനുവേണ്ടിട്ട് നമ്മൾ ആദ്യം നമ്മുടെ ഡാറ്റ സെറ്റിന്റെ എൻട്രോപ്പി കാൽക്കുലേറ്റ് ചെയ്യണം. ഇൻഫർമേഷൻ ഗെയിൻ കണ്ടുപിടിക്കാനുള്ള ഇക്വേഷനിൽ ഫസ്റ്റ് എന്ന് പറയുന്നത് എന്താണ്? എൻട്രോപ്പി കണ്ടുപിടിക്കലാണ്. ആ എൻട്രോപ്പി ഓഫ് ദ ഫുൾ ഡാറ്റ സെറ്റിന്റെ എൻട്രോപ്പി കണ്ടുപിടിക്കണം. എൻട്രോപ്പി ഓഫ് ഡാറ്റ സെറ്റ്. അപ്പൊ അതിനകത്ത് നിങ്ങൾ നോക്കിയാൽ മനസ്സിലാകും. അതിൽ എസ് ഉള്ള എത്രെണ്ണം ഉണ്ട്? അതായത് ആ സ്റ്റുഡന്റ് ഒരാൾക്ക് എന്താ പറയേണ്ടത് ഈ പറയുന്ന കാലാവസ്ഥ അതേപോലെ ഇതിൽ കളിക്കാൻ പറ്റുമോ ഇല്ലയോ എന്നുള്ളതാണല്ലോ നമ്മുടെ നമ്മൾ കണ്ടുപിടിക്കാൻ പോകുന്നത്. എസ് ഉള്ള എത്രെണ്ണം ഉണ്ട്? എസ് ഉള്ള നയൻ ഉണ്ട് നോൺ വിൻഡ് അഞ്ചെണ്ണം ഉണ്ട്. അപ്പൊ നമ്മൾ എൻട്രോപ്പി കണ്ടുപിടിക്കുമ്പോൾ അതായത് പോസിറ്റീവ് ആയിട്ടുള്ള നയനും നെഗറ്റീവ് ആയിട്ടുള്ള ഫൈവും അപ്പൊ എൻട്രോപ്പി കണ്ടുപിടിക്കുമ്പോൾ നയൻ ബൈ",
                                        "model": "gemini-3.1-flash-lite"
                              },
                              {
                                        "seq": 2,
                                        "filename": "CHUNK1",
                                        "drive_file_id": "1WF8Nn3ioZR24muo_4uga6i7qykUEdecg",
                                        "created_at": "2026-09-23T18:05:34.280Z",
                                        "text": "14 log 2 9/14 - 5/ 14 log 2 5/14 0.94 എൻട്രോപ്പി എൻട്രോപ്പി ഓഫ് ഓൾ ആട്രിബ്യൂട്ട്സ് സണ്ണി ഉണ്ട് ക്ലൗഡി ആ ഓവർകാസ്റ്റ് ഉണ്ട് പിന്നെ റെയ്ൻ അപ്പോ ഈ മൂന്നണ്ണത്തിന്റെ ഈ പറഞ്ഞതുപോലെ എൻട്രോപ്പി നമ്മൾ കണ്ടുപിടിക്കണം. ഇങ്ങനെ ഓരോന്നിന്റെയും എൻട്രോപ്പി കണ്ടുപിടിച്ചതിനു ശേഷമാണ് നമ്മൾ ലാസ്റ്റ് ഇൻഫർമേഷൻ ഗെയിൻ കണ്ടുപിടിക്കുന്നത്. അപ്പോ നമ്മൾ ആദ്യം എടുത്തത് ഏതാണ്? സണ്ണി എടുക്കാം സണ്ണി എൻട്രോപ്പി ഓഫ് സണ്ണി അപ്പോ സണ്ണിയുടെ കേസിൽ നിങ്ങൾ ആ ഡാറ്റാ സെറ്റ് ഒന്ന് നോക്കിയേ അതിനകത്ത് എത്ര എസ്സും നോയും ഉണ്ട്? എത്ര എസ്സും നോയും ഉണ്ട്? രണ്ടും മൂന്നും അല്ലേ? അപ്പോ ഇതിന്റെ എൻട്രോപ്പി കണ്ടുപിടിക്കണം. -2/ 5 log 2 2/5 - 3/5 log 2 3/5 എൻട്രോപ്പി ഓഫ് സണ്ണി അല്ലാതെ ഏതാണ്? ഔട്ട്കാസ്റ്റ് അതേപോലെ എൻട്രോപ്പി ഓഫ് റെയ്ൻ പെട്ടെന്ന് കണ്ടുപിടിക്കാമോ? ഇത് രണ്ടും പെട്ടെന്ന് കണ്ടുപിടിക്കാം ഔട്ട്കാസ്റ്റിന്റെയും റെയ്നിന്റെയും എൻട്രോപ്പി കണ്ടുപിടിക്കുന്നത് എങ്ങനെയാണെന്ന് മനസ്സിലായോ? ലാസ്റ്റ് ബെഞ്ചിൽ ഇരിക്കുന്നവർക്ക് ഒക്കെ എന്താ പരിപാടി? ആ താല്പര്യമില്ലാത്തവർ ഇറങ്ങി പൊയ്ക്കോ ഞാൻ ആർക്കും ഒന്നും തന്നേക്കണ്ട. നമ്പർ പറഞ്ഞിട്ട് പൊയ്ക്കോ. കിട്ടിയോ? 0.97 ആണോ? കിട്ടിയോ? അപ്പോ നമ്മൾ എന്താ പറയേണ്ടത് ഒരു ഔട്ട് ലുക്ക് എന്ന് പറയുന്ന ഫീച്ചറിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ കണ്ടുപിടിക്കാൻ വേണ്ടി നമ്മൾ ആദ്യം ഡാറ്റാ സെറ്റിന്റെ ഫുൾ എൻട്രോപ്പി കാൽക്കുലേറ്റ് ചെയ്യും. അതിനുശേഷം ആ പർട്ടിക്കുലർ ഫീച്ചറിന്റെ ആട്രിബ്യൂട്ട്സ് ഏതൊക്കെയാണോ ആ ആട്രിബ്യൂട്ട്സിന്റെയും എൻട്രോപ്പി കാൽക്കുലേറ്റ് ചെയ്യും. ഇതിനുശേഷമാണ് നമ്മൾ ഇനി എൻട്രോപ്പി ഇൻഫർമേഷൻ ഗെയിൻ പർട്ടിക്കുലർ ഔട്ട് ലുക്ക് എന്ന് പറയുന്ന ഫീച്ചറിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ കാൽക്കുലേറ്റ് ചെയ്യാൻ പോകുന്നത്. അപ്പോ അത് എങ്ങനെയാണെന്ന് നോക്കാം. ഇൻഫർമേഷൻ ഗെയിన్ ഓഫ് ഫസ്റ്റ് എൻട്രോപ്പി ഓഫ് ഓൾ ഡാറ്റ - ഫസ്റ്റ് നമ്മൾ എടുക്കുന്നത് ഇതും ഇതും ഇതും 5 / 14 എൻട്രോപ്പി ഓഫ് സണ്ണി - 4/14 ഔട്ട് ലുക്ക് എന്ന് പറയുന്ന ഫീച്ചറിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ കണ്ടുപിടിക്കുന്നു. നിങ്ങൾക്കൊക്കെ ഇതൊക്കെ തന്നെയാണോ എഴുതുന്നേ? ആ ലാസ്റ്റ് ബെഞ്ചിൽ ഇരിക്കുന്നവരൊക്കെ? ഇതുതന്നെയാണോ എഴുതുന്നത് വേറെ എന്തെങ്കിലും ആണോ എഴുതുന്നേ? നിങ്ങളെപ്പറ്റി ഞാൻ ചോദിച്ചില്ല. നിങ്ങൾ ഇവിടെ ഒന്നല്ല എന്ന് എനിക്ക് അറിയാം. ലാസ്റ്റ് ബെഞ്ച് നോട് ചോദിച്ചില്ല ഞാൻ എന്താ അവരോട് ചോദിക്കും സെക്കൻഡ് ലാസ്റ്റ് ബെഞ്ച്. അപ്പോ നമ്മൾ ഇപ്പോൾ ഔട്ട് ലുക്ക് എന്ന് പറയുന്ന ഫീച്ചറിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ ആണ് കണ്ടുപിടിച്ചിരിക്കുന്നത്. അതിൽ കണ്ടുപിടിക്കുന്നത് എങ്ങനെയാണെന്ന് വെച്ചാൽ ഫസ്റ്റ് എൻട്രോപ്പി ഓഫ് ഓൾ ഡാറ്റാ സെറ്റിന്റെ എൻട്രോപ്പി - 5/14 * ഇ ഓഫ് എൻട്രോപ്പി ഓഫ് സണ്ണി എന്ന് പറഞ്ഞാൽ എന്താണ്? ഫൈവ് എന്ന് പറഞ്ഞാൽ എന്താണ്? ആ ചൈൽഡ് അതായത് ഇതിന്റെ ഫ്രണ്ട് പോർഷൻ അതാണ് ഫൈവ്. ഈ 5/14 എന്ന് പറഞ്ഞാൽ എന്താണ്? ആ പാരന്റിന്റെ ടോട്ടൽ പ്രൊപ്പോർഷൻ അത് 14 ആട്രിബ്യൂട്ട്സ്. അതാണ് ഇ. * ഇ ഓഫ് സണ്ണി ഇ ഓഫ് സണ്ണി എന്ന് പറഞ്ഞാൽ ഇ ഓഫ് ചൈൽഡ്. ചൈൽഡ് എന്ന് പറയുന്നത് സണ്ണി ചൈൽഡ് ആണ്. അതേപോലെ തന്നെ ഔട്ട്കാസ്റ്റിന്റെ കേസും ഇതേപോലെ തന്നെ 4/14 *",
                                        "model": "gemini-3.1-flash-lite"
                              },
                              {
                                        "seq": 3,
                                        "filename": "CHUNK2",
                                        "drive_file_id": "1p3SMj6-5Y8zzQADvOeXWPxbmjpnts1JW",
                                        "created_at": "2026-09-23T18:09:04.134Z",
                                        "text": "5 / 14 * ചൈൽഡ് ബൈ പാരന്റ് * എൻട്രോപ്പി ഓഫ് ചൈൽഡ് ആണ്. അതിനുമുമ്പ് ഒരു സിഗ്മ ഉണ്ടായിരുന്നു. അപ്പൊ അതുകൊണ്ടാണ് നമ്മൾ ഇത് തന്നെ ചൈൽഡ് ബൈ പാരന്റ് * ഇ ഓഫ് ചൈൽഡ് എൻട്രോപ്പി ഓഫ് ചൈൽഡ് അതാണ് ചൈൽഡ് പ്രൊപ്പോർഷൻ ആണ് ഈ മുകളിൽ എഴുതിയിരിക്കുന്നത്. പാരന്റ് ടോട്ടൽ പാരന്റ് * ടോട്ടൽ വാല്യൂ 0.246 എന്ന് പറഞ്ഞിട്ടുണ്ട്. അപ്പൊ ഇതേപോലെ നമ്മൾ മറ്റ് മൂന്ന് ഫീച്ചേഴ്സും കൂടെ കണ്ടുപിടിക്കണം. ടെമ്പറേച്ചറും ഹ്യുമിഡിറ്റിയും പിന്നെ ഏതാണ് വിൻഡ്. എൻട്രോപ്പി ഓഫ് പാരന്റ് ഇൻഫർമേഷൻ ഗെയിൻ എൻട്രോപ്പി ഓഫ് പാരന്റ് എന്ന് പറയുന്നത് എൻട്രോപ്പി ഓഫ് ഹോൾ ഡാറ്റ ഹോൾ ഡാറ്റയാണ്. പാരന്റ് ഏതാണെന്ന് കണ്ടുപിടിക്കാനല്ലേ ഡാറ്റ സെറ്റിന്റെ എൻട്രോപ്പി ആവണം അത്. കാരണം ഇനി അടുത്ത അതായത് നമ്മൾ ഇപ്പോൾ ഒരു സെറ്റ് അതായത് ഈ നാല് ഫീച്ചേഴ്സിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ കണ്ടുപിടിക്കുമ്പോൾ ഈ ഡാറ്റ സെറ്റ് മൊത്തത്തിൽ മാറും. അപ്പൊ നമ്മൾ ഇതിന്റെ വാല్యూയും വ്യത്യാസപ്പെടും. ഇപ്പോൾ കറന്റ്ലി നമ്മൾ അടുത്ത ഫീച്ചർ കണ്ടുപിടിക്കുമ്പോഴും ഈ വാല്യൂ മാറും. കാരണം ഡാറ്റ സെറ്റിന്റെ എൻട്രോപ്പിക്ക് ചേഞ്ച് വരും. പക്ഷേ ഇനി അത് കഴിഞ്ഞ ശേഷം ഈ നാല് ഫീച്ചേഴ്സിൽ നമ്മൾ പാരന്റ് നോഡ് ഒക്കെ കണ്ടുപിടിച്ചതിനു ശേഷം നമ്മൾ ഈ പറഞ്ഞപോലെ ഡാറ്റ സെറ്റിന് നമുക്ക് ചേഞ്ച് വരും. അപ്പൊ നമ്മൾ ഔട്ട്‌ലുക്ക് എന്നുള്ളത് കിട്ടി. ഇനി അതേപോലെ മറ്റേ അടുത്ത രണ്ട് ഫീച്ചറും കൂടെ ചെയ്യോ? എൻട്രോപ്പി ഓഫ് ഇൻഫർമേഷൻ ഗെയിൻ ഓഫ് ടെമ്പറേച്ചർ. ആരെങ്കിലും ചെയ്യാൻ ശ്രമിക്കുന്ന��ണ്ടോ? ഇല്ലെങ്കിൽ ബാക്കി ഒന്ന് പറഞ്ഞു തരാം. ചെയ്യാൻ താല്പര്യമില്ലെങ്കിൽ ഒരു രണ്ടെണ്ണം ടെമ്പറേച്ചർ ചെയ്താൽ മതി. ബാക്കി ഫുൾ നമ്മൾ സമയം കളയണ്ട. പക്ഷേ ചെയ്തു നോക്കണം. കാരണം ഇത് പ്രോബ്ലം ചോദിക്കുന്നതാണ്. ഐഡി 3 അൽഗോരിതം ഡിസിഷൻ ട്രീ അൽഗോരിതം എന്ന് പറയുന്നത് ഇംപോർട്ടന്റ് ആയിട്ടുള്ള കൺസെപ്റ്റ് ആണ്. നമ്മുടെ നോർമൽ ട്രെയിനിങ് ഡാറ്റ സെറ്റിനെ നമ്മൾ ട്രീ ഫോമിൽ റെപ്രസെന്റ് ചെയ്യുന്നതാണ് ഏറ്റവും ബെസ്റ്റ് ഡിసిഷൻ ഡിസിഷൻ കണ്ടുപിടിക്കാൻ. ഇങ്ങനെയാണ് നമുക്ക് ആ നാല് ഫീച്ചേഴ്സിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ വാല്യൂ വരുന്നത്. 0.246 0.29 .16 ആൻഡ് 0.047 ഇങ്ങനെ നാല് വാല്യൂസ് ആണ് നമുക്ക് ഓരോ ഫീച്ചേഴ്സിന്റെയും ഇൻഫർമേഷൻ ഗെയിൻ ആയിട്ട് കിട്ടിയത്. അപ്പൊ നമ്മൾ ഇതിൽ നിന്ന് റൂട്ട് നോഡ് എങ്ങനെയാണ് കണ്ടുപിടിക്കുക? ഇൻഫർമേഷൻ ഗെയിൻ കൂടുതൽ വാല്യൂ കൂടുതലുള്ള ഫീച്ചറിനെയാണ് നമ്മൾ എന്തായിട്ട് വെക്കുക? റൂട്ട് നോഡ് ആയിട്ട് വെക്കുക. അപ്പൊ നമുക്കറിയാം ഇവിടെ റൂട്ട് നോഡ് ആയിട്ട് വെതർ ഔട്ട്‌ലുക്ക് വെതർ ഏതൊക്കെയാണ് സണ്ണി ഔട്ട്‌ലുക്ക് റെയിൻ ഇങ്ങനെയല്ലേ? അപ്പൊ നിങ്ങൾ ഔട്ട്‌ലുക്ക് വെതർ നോക്കുമ്പോൾ അതായത് നിങ്ങൾ ആ ഡാറ്റ സെറ്റിൽ നോക്കിയാൽ കാണാം ഈ ഔട്ട്‌ലുക്കിന്റെ ഇതിന്റെ സൈഡിൽ അതിന്റെ വാല്യ�� എല്ലാം പോസിറ്റീവ് വാല്യൂ ആണ്. അതായത് എസ് ആണ് അതിന്റെ വാല്യൂ. നോക്കിയോ എല്ലാവരും? അപ്പൊ എന്താ പറയുക ഔട്ട്‌ലുക്ക് അതായത് വെതർ ഔട്ട്‌ലുക്ക് ആണെങ്കിൽ ആ പർട്ടിക്കുലർ പേഴ്സൺ എന്താക്കാൻ പറ്റുക? കളിക്കാൻ പറ്റും. അപ്പൊ അതിന്റെ",
                                        "model": "gemini-3.1-flash-lite"
                              },
                              {
                                        "seq": 4,
                                        "filename": "CHUNK3",
                                        "drive_file_id": "1PRXKO1hW7cbgXhlFvcG-r-qJYHWzWW4e",
                                        "created_at": "2026-09-23T18:11:56.420Z",
                                        "text": "Attendance roll number one. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten. Eleven. Twelve. Thirteen. Fourteen. Fifteen. Sixteen. Seventeen. Eighteen. Nineteen. Twenty. Twenty-one. Twenty-two. Twenty-three. Twenty-four. Twenty-five. Twenty-six. Twenty-seven. Twenty-eight. Twenty-nine. Thirty. Thirty-one. Thirty-two. Thirty-three. Thirty-four. Thirty-five. Thirty-six. Thirty-seven. Thirty-eight. Thirty-nine. Forty. Forty-one. Forty-two. Forty-three. Forty-four. Forty-five. Forty-six. Forty-seven. Forty-eight. Forty-nine. Fifty. Fifty-one. Fifty-two. Fifty-three. Fifty-four. Fifty-five. Fifty-six. Fifty-seven. Fifty-eight. Fifty-nine. Sixty. Sixty-one. Sixty-two. Sixty-three. Sixty-four. Sixty-five. Sixty-six. Sixty-seven. Sixty-eight. Sixty-nine.",
                                        "model": "gemini-3.1-flash-lite"
                              }
                    ],
                    "fullTranscript": "[Chunk 1 | File: chunk_000]\nMachine learning class test one 23/9 എല്ലാവരും ഒന്ന് നോക്കിയേ ഞാൻ ആ ഗ്രൂപ്പിൽ ഒരു എക്സാമ്പിൾ ഇട്ടിട്ടുണ്ടേ. ഞാൻ ഇത് പറയണത്തിനുവേണ്ടിയാ നിങ്ങൾ ആരും ശ്രദ്ധിക്കുന്നതായിട്ട് എനിക്ക് തോന്നുന്നില്ല. ആ എക്സാമ്പിൾ ഒന്ന് നോക്കിയേ എല്ലാവരും. അപ്പൊ അതിനകത്തുനിന്ന് ആ ഡാറ്റ സെറ്റിൽ നമ്മൾ ഈ പറഞ്ഞപോലെ വെച്ചിട്ട് റെപ്രസന്റ് ചെയ്യാൻ പോവുകയാണ്. ഇത് ആദ്യം നമ്മൾ എന്താ ചെയ്യേണ്ടത്? ഫസ്റ്റ് ആ ഡാറ്റ സെറ്റിനകത്തുനിന്ന് ഏതാണ് നമ്മുടെ പേരന്റ് നോഡ് എന്നുള്ളത് കണ്ടുപിടിക്കണം. അത് കണ്ടുപിടിക്കാൻ വേണ്ടിയിട്ട് നമ്മൾ അതിനകത്തുള്ള എല്ലാ ഫീച്ചേഴ്സിന്റെയും എൻട്രോപ്പിയും ഇൻഫർമേഷൻ ഗെയിനും നമ്മൾ കണ്ടുപിടിക്കണം. അപ്പൊ അതാണ് നമ്മൾ ഫസ്റ്റ് ചെയ്യാൻ പോകുന്നത്. ക്വസ്റ്റ്യൻ എല്ലാവർക്കും കിട്ടിയോ? നോക്കിയോ? അപ്പൊ അത് നമുക്ക് ഫസ്റ്റ് അപ്പൊ ഇതിന്റെ ഇക്വേഷൻ നിങ്ങൾക്ക് കുറച്ചുകൂടെ മനസ്സിലാകും. ഞാൻ അതൊന്നു കൂടെ പറയാം. 14 ഡേയ്സ് ഉണ്ട് അതുപോലെ എത്ര ഫീച്ചേഴ്സ് ഉണ്ട് അതിനകത്ത്? എത്ര ഫീച്ചേഴ്സ് ഉണ്ട്? നാല് ഫീച്ചേഴ്സ് ഉണ്ട് വെതർ ഉണ്ട് ടെംപറേച്ചർ, ഹ്യുമിഡിറ്റി, വിൻഡ് അങ്ങനെ നാല് ഫീച്ചേഴ്സ് ഉണ്ട്. അപ്പൊ ഈ നാല് ഫീച്ചേഴ്സിൽ ഏത് ഫീച്ചറാണ് നമ്മൾ ഈ ഡാറ്റ സെറ്റിനെ ശരിക്കും പറഞ്ഞാൽ ഡിസിഷన్ ട്രീ ഫോമിൽ നമ്മൾ റെപ്രസന്റ് ചെയ്യാനാണ് പോകുന്നത്. അപ്പൊ അതിൽ ഒരു ട്രീ റെപ്രസന്റേഷനിൽ നമ്മൾ ഏറ്റവും ആദ്യം എന്താ വേണ്ടത്? നമുക്കൊരു റൂട്ട് നോഡ് വേണം. അപ്പൊ നമ്മൾ ഇനി ഇതിൽ ഏത് ഫീച്ചറാണ് നമ്മൾ റൂട്ട് നോഡ് ആയിട്ട് സെലക്ട് ചെയ്യുന്നത് എന്നുള്ളതാണ് നമ്മൾ കണ്ടുപിടിക്കാൻ പോകുന്നത്. അപ്പൊ അതിന് ആദ്യം വേണ്ടത് എന്ന് പറഞ്ഞാൽ നമ്മൾ ഇൻഫർമേഷൻ ഗെയിൻ ഓഫ് വെതർ ആദ്യം വെതറിനെ വെതർ അതിനകത്ത് വെതർ എന്ന് പോകുന്നുണ്ടോ? ഞാൻ വെതർ എന്നല്ലേ പറയുന്നത് ഞാൻ ശരിക്കും അപ്പൊ വെതർ ഔട്ട്‌ലുക്കിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ ആണ് നമ്മൾ ഇനി കണ്ടുപിടിക്കാൻ പോകുന്നത്. അതിൽ ഫസ്റ്റ് സ്റ്റെപ്പ് എന്ന് പറയുന്നത് എന്താണ്? റൂട്ട് നോഡ് ഐഡന്റിഫൈ ചെയ്യാൻ പോവുകയാണ്. അതിൽ ഫസ്റ്റ് എന്ന് പറയുന്നത് ഇൻഫർമേഷൻ ഗെയിన్ ഓഫ് ആദ്യം നമ്മൾ ഈ ഒരു പ്രോസസ് ആണ് ചെയ്യാൻ പോകുന്നത്. അപ്പൊ അതിനുവേണ്ടിട്ട് നമ്മൾ ആദ്യം നമ്മുടെ ഡാറ്റ സെറ്റിന്റെ എൻട്രോപ്പി കാൽക്കുലേറ്റ് ചെയ്യണം. ഇൻഫർമേഷൻ ഗെയിൻ കണ്ടുപിടിക്കാനുള്ള ഇക്വേഷനിൽ ഫസ്റ്റ് എന്ന് പറയുന്നത് എന്താണ്? എൻട്രോപ്പി കണ്ടുപിടിക്കലാണ്. ആ എൻട്രോപ്പി ഓഫ് ദ ഫുൾ ഡാറ്റ സെറ്റിന്റെ എൻട്രോപ്പി കണ്ടുപിടിക്കണം. എൻട്രോപ്പി ഓഫ് ഡാറ്റ സെറ്റ്. അപ്പൊ അതിനകത്ത് നിങ്ങൾ നോക്കിയാൽ മനസ്സിലാകും. അതിൽ എസ് ഉള്ള എത്രെണ്ണം ഉണ്ട്? അതായത് ആ സ്റ്റുഡന്റ് ഒരാൾക്ക് എന്താ പറയേണ്ടത് ഈ പറയുന്ന കാലാവസ്ഥ അതേപോലെ ഇതിൽ കളിക്കാൻ പറ്റുമോ ഇല്ലയോ എന്നുള്ളതാണല്ലോ നമ്മുടെ നമ്മൾ കണ്ടുപിടിക്കാൻ പോകുന്നത്. എസ് ഉള്ള എത്രെണ്ണം ഉണ്ട്? എസ് ഉള്ള നയൻ ഉണ്ട് നോൺ വിൻഡ് അഞ്ചെണ്ണം ഉണ്ട്. അപ്പൊ നമ്മൾ എൻട്രോപ്പി കണ്ടുപിടിക്കുമ്പോൾ അതായത് പോസിറ്റീവ് ആയിട്ടുള്ള നയനും നെഗറ്റീവ് ആയിട്ടുള്ള ഫൈവും അപ്പൊ എൻട്രോപ്പി കണ്ടുപിടിക്കുമ്പോൾ നയൻ ബൈ\n\n---\n\n[Chunk 2 | File: CHUNK1]\n14 log 2 9/14 - 5/ 14 log 2 5/14 0.94 എൻട്രോപ്പി എൻട്രോപ്പി ഓഫ് ഓൾ ആട്രിബ്യൂട്ട്സ് സണ്ണി ഉണ്ട് ക്ലൗഡി ആ ഓവർകാസ്റ്റ് ഉണ്ട് പിന്നെ റെയ്ൻ അപ്പോ ഈ മൂന്നണ്ണത്തിന്റെ ഈ പറഞ്ഞതുപോലെ എൻട്രോപ്പി നമ്മൾ കണ്ടുപിടിക്കണം. ഇങ്ങനെ ഓരോന്നിന്റെയും എൻട്രോപ്പി കണ്ടുപിടിച്ചതിനു ശേഷമാണ് നമ്മൾ ലാസ്റ്റ് ഇൻഫർമേഷൻ ഗെയിൻ കണ്ടുപിടിക്കുന്നത്. അപ്പോ നമ്മൾ ആദ്യം എടുത്തത് ഏതാണ്? സണ്ണി എടുക്കാം സണ്ണി എൻട്രോപ്പി ഓഫ് സണ്ണി അപ്പോ സണ്ണിയുടെ കേസിൽ നിങ്ങൾ ആ ഡാറ്റാ സെറ്റ് ഒന്ന് നോക്കിയേ അതിനകത്ത് എത്ര എസ്സും നോയും ഉണ്ട്? എത്ര എസ്സും നോയും ഉണ്ട്? രണ്ടും മൂന്നും അല്ലേ? അപ്പോ ഇതിന്റെ എൻട്രോപ്പി കണ്ടുപിടിക്കണം. -2/ 5 log 2 2/5 - 3/5 log 2 3/5 എൻട്രോപ്പി ഓഫ് സണ്ണി അല്ലാതെ ഏതാണ്? ഔട്ട്കാസ്റ്റ് അതേപോലെ എൻട്രോപ്പി ഓഫ് റെയ്ൻ പെട്ടെന്ന് കണ്ടുപിടിക്കാമോ? ഇത് രണ്ടും പെട്ടെന്ന് കണ്ടുപിടിക്കാം ഔട്ട്കാസ്റ്റിന്റെയും റെയ്നിന്റെയും എൻട്രോപ്പി കണ്ടുപിടിക്കുന്നത് എങ്ങനെയാണെന്ന് മനസ്സിലായോ? ലാസ്റ്റ് ബെഞ്ചിൽ ഇരിക്കുന്നവർക്ക് ഒക്കെ എന്താ പരിപാടി? ആ താല്പര്യമില്ലാത്തവർ ഇറങ്ങി പൊയ്ക്കോ ഞാൻ ആർക്കും ഒന്നും തന്നേക്കണ്ട. നമ്പർ പറഞ്ഞിട്ട് പൊയ്ക്കോ. കിട്ടിയോ? 0.97 ആണോ? കിട്ടിയോ? അപ്പോ നമ്മൾ എന്താ പറയേണ്ടത് ഒരു ഔട്ട് ലുക്ക് എന്ന് പറയുന്ന ഫീച്ചറിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ കണ്ടുപിടിക്കാൻ വേണ്ടി നമ്മൾ ആദ്യം ഡാറ്റാ സെറ്റിന്റെ ഫുൾ എൻട്രോപ്പി കാൽക്കുലേറ്റ് ചെയ്യും. അതിനുശേഷം ആ പർട്ടിക്കുലർ ഫീച്ചറിന്റെ ആട്രിബ്യൂട്ട്സ് ഏതൊക്കെയാണോ ആ ആട്രിബ്യൂട്ട്സിന്റെയും എൻട്രോപ്പി കാൽക്കുലേറ്റ് ചെയ്യും. ഇതിനുശേഷമാണ് നമ്മൾ ഇനി എൻട്രോപ്പി ഇൻഫർമേഷൻ ഗെയിൻ പർട്ടിക്കുലർ ഔട്ട് ലുക്ക് എന്ന് പറയുന്ന ഫീച്ചറിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ കാൽക്കുലേറ്റ് ചെയ്യാൻ പോകുന്നത്. അപ്പോ അത് എങ്ങനെയാണെന്ന് നോക്കാം. ഇൻഫർമേഷൻ ഗെയിన్ ഓഫ് ഫസ്റ്റ് എൻട്രോപ്പി ഓഫ് ഓൾ ഡാറ്റ - ഫസ്റ്റ് നമ്മൾ എടുക്കുന്നത് ഇതും ഇതും ഇതും 5 / 14 എൻട്രോപ്പി ഓഫ് സണ്ണി - 4/14 ഔട്ട് ലുക്ക് എന്ന് പറയുന്ന ഫീച്ചറിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ കണ്ടുപിടിക്കുന്നു. നിങ്ങൾക്കൊക്കെ ഇതൊക്കെ തന്നെയാണോ എഴുതുന്നേ? ആ ലാസ്റ്റ് ബെഞ്ചിൽ ഇരിക്കുന്നവരൊക്കെ? ഇതുതന്നെയാണോ എഴുതുന്നത് വേറെ എന്തെങ്കിലും ആണോ എഴുതുന്നേ? നിങ്ങളെപ്പറ്റി ഞാൻ ചോദിച്ചില്ല. നിങ്ങൾ ഇവിടെ ഒന്നല്ല എന്ന് എനിക്ക് അറിയാം. ലാസ്റ്റ് ബെഞ്ച് നോട് ചോദിച്ചില്ല ഞാൻ എന്താ അവരോട് ചോദിക്കും സെക്കൻഡ് ലാസ്റ്റ് ബെഞ്ച്. അപ്പോ നമ്മൾ ഇപ്പോൾ ഔട്ട് ലുക്ക് എന്ന് പറയുന്ന ഫീച്ചറിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ ആണ് കണ്ടുപിടിച്ചിരിക്കുന്നത്. അതിൽ കണ്ടുപിടിക്കുന്നത് എങ്ങനെയാണെന്ന് വെച്ചാൽ ഫസ്റ്റ് എൻട്രോപ്പി ഓഫ് ഓൾ ഡാറ്റാ സെറ്റിന്റെ എൻട്രോപ്പി - 5/14 * ഇ ഓഫ് എൻട്രോപ്പി ഓഫ് സണ്ണി എന്ന് പറഞ്ഞാൽ എന്താണ്? ഫൈവ് എന്ന് പറഞ്ഞാൽ എന്താണ്? ആ ചൈൽഡ് അതായത് ഇതിന്റെ ഫ്രണ്ട് പോർഷൻ അതാണ് ഫൈവ്. ഈ 5/14 എന്ന് പറഞ്ഞാൽ എന്താണ്? ആ പാരന്റിന്റെ ടോട്ടൽ പ്രൊപ്പോർഷൻ അത് 14 ആട്രിബ്യൂട്ട്സ്. അതാണ് ഇ. * ഇ ഓഫ് സണ്ണി ഇ ഓഫ് സണ്ണി എന്ന് പറഞ്ഞാൽ ഇ ഓഫ് ചൈൽഡ്. ചൈൽഡ് എന്ന് പറയുന്നത് സണ്ണി ചൈൽഡ് ആണ്. അതേപോലെ തന്നെ ഔട്ട്കാസ്റ്റിന്റെ കേസും ഇതേപോലെ തന്നെ 4/14 *\n\n---\n\n[Chunk 3 | File: CHUNK2]\n5 / 14 * ചൈൽഡ് ബൈ പാരന്റ് * എൻട്രോപ്പി ഓഫ് ചൈൽഡ് ആണ്. അതിനുമുമ്പ് ഒരു സിഗ്മ ഉണ്ടായിരുന്നു. അപ്പൊ അതുകൊണ്ടാണ് നമ്മൾ ഇത് തന്നെ ചൈൽഡ് ബൈ പാരന്റ് * ഇ ഓഫ് ചൈൽഡ് എൻട്രോപ്പി ഓഫ് ചൈൽഡ് അതാണ് ചൈൽഡ് പ്രൊപ്പോർഷൻ ആണ് ഈ മുകളിൽ എഴുതിയിരിക്കുന്നത്. പാരന്റ് ടോട്ടൽ പാരന്റ് * ടോട്ടൽ വാല്യൂ 0.246 എന്ന് പറഞ്ഞിട്ടുണ്ട്. അപ്പൊ ഇതേപോലെ നമ്മൾ മറ്റ് മൂന്ന് ഫീച്ചേഴ്സും കൂടെ കണ്ടുപിടിക്കണം. ടെമ്പറേച്ചറും ഹ്യുമിഡിറ്റിയും പിന്നെ ഏതാണ് വിൻഡ്. എൻട്രോപ്പി ഓഫ് പാരന്റ് ഇൻഫർമേഷൻ ഗെയിൻ എൻട്രോപ്പി ഓഫ് പാരന്റ് എന്ന് പറയുന്നത് എൻട്രോപ്പി ഓഫ് ഹോൾ ഡാറ്റ ഹോൾ ഡാറ്റയാണ്. പാരന്റ് ഏതാണെന്ന് കണ്ടുപിടിക്കാനല്ലേ ഡാറ്റ സെറ്റിന്റെ എൻട്രോപ്പി ആവണം അത്. കാരണം ഇനി അടുത്ത അതായത് നമ്മൾ ഇപ്പോൾ ഒരു സെറ്റ് അതായത് ഈ നാല് ഫീച്ചേഴ്സിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ കണ്ടുപിടിക്കുമ്പോൾ ഈ ഡാറ്റ സെറ്റ് മൊത്തത്തിൽ മാറും. അപ്പൊ നമ്മൾ ഇതിന്റെ വാല్యూയും വ്യത്യാസപ്പെടും. ഇപ്പോൾ കറന്റ്ലി നമ്മൾ അടുത്ത ഫീച്ചർ കണ്ടുപിടിക്കുമ്പോഴും ഈ വാല്യൂ മാറും. കാരണം ഡാറ്റ സെറ്റിന്റെ എൻട്രോപ്പിക്ക് ചേഞ്ച് വരും. പക്ഷേ ഇനി അത് കഴിഞ്ഞ ശേഷം ഈ നാല് ഫീച്ചേഴ്സിൽ നമ്മൾ പാരന്റ് നോഡ് ഒക്കെ കണ്ടുപിടിച്ചതിനു ശേഷം നമ്മൾ ഈ പറഞ്ഞപോലെ ഡാറ്റ സെറ്റിന് നമുക്ക് ചേഞ്ച് വരും. അപ്പൊ നമ്മൾ ഔട്ട്‌ലുക്ക് എന്നുള്ളത് കിട്ടി. ഇനി അതേപോലെ മറ്റേ അടുത്ത രണ്ട് ഫീച്ചറും കൂടെ ചെയ്യോ? എൻട്രോപ്പി ഓഫ് ഇൻഫർമേഷൻ ഗെയിൻ ഓഫ് ടെമ്പറേച്ചർ. ആരെങ്കിലും ചെയ്യാൻ ശ്രമിക്കുന്ന��ണ്ടോ? ഇല്ലെങ്കിൽ ബാക്കി ഒന്ന് പറഞ്ഞു തരാം. ചെയ്യാൻ താല്പര്യമില്ലെങ്കിൽ ഒരു രണ്ടെണ്ണം ടെമ്പറേച്ചർ ചെയ്താൽ മതി. ബാക്കി ഫുൾ നമ്മൾ സമയം കളയണ്ട. പക്ഷേ ചെയ്തു നോക്കണം. കാരണം ഇത് പ്രോബ്ലം ചോദിക്കുന്നതാണ്. ഐഡി 3 അൽഗോരിതം ഡിസിഷൻ ട്രീ അൽഗോരിതം എന്ന് പറയുന്നത് ഇംപോർട്ടന്റ് ആയിട്ടുള്ള കൺസെപ്റ്റ് ആണ്. നമ്മുടെ നോർമൽ ട്രെയിനിങ് ഡാറ്റ സെറ്റിനെ നമ്മൾ ട്രീ ഫോമിൽ റെപ്രസെന്റ് ചെയ്യുന്നതാണ് ഏറ്റവും ബെസ്റ്റ് ഡിసిഷൻ ഡിസിഷൻ കണ്ടുപിടിക്കാൻ. ഇങ്ങനെയാണ് നമുക്ക് ആ നാല് ഫീച്ചേഴ്സിന്റെ ഇൻഫർമേഷൻ ഗെയിൻ വാല്യൂ വരുന്നത്. 0.246 0.29 .16 ആൻഡ് 0.047 ഇങ്ങനെ നാല് വാല്യൂസ് ആണ് നമുക്ക് ഓരോ ഫീച്ചേഴ്സിന്റെയും ഇൻഫർമേഷൻ ഗെയിൻ ആയിട്ട് കിട്ടിയത്. അപ്പൊ നമ്മൾ ഇതിൽ നിന്ന് റൂട്ട് നോഡ് എങ്ങനെയാണ് കണ്ടുപിടിക്കുക? ഇൻഫർമേഷൻ ഗെയിൻ കൂടുതൽ വാല്യൂ കൂടുതലുള്ള ഫീച്ചറിനെയാണ് നമ്മൾ എന്തായിട്ട് വെക്കുക? റൂട്ട് നോഡ് ആയിട്ട് വെക്കുക. അപ്പൊ നമുക്കറിയാം ഇവിടെ റൂട്ട് നോഡ് ആയിട്ട് വെതർ ഔട്ട്‌ലുക്ക് വെതർ ഏതൊക്കെയാണ് സണ്ണി ഔട്ട്‌ലുക്ക് റെയിൻ ഇങ്ങനെയല്ലേ? അപ്പൊ നിങ്ങൾ ഔട്ട്‌ലുക്ക് വെതർ നോക്കുമ്പോൾ അതായത് നിങ്ങൾ ആ ഡാറ്റ സെറ്റിൽ നോക്കിയാൽ കാണാം ഈ ഔട്ട്‌ലുക്കിന്റെ ഇതിന്റെ സൈഡിൽ അതിന്റെ വാല്യ�� എല്ലാം പോസിറ്റീവ് വാല്യൂ ആണ്. അതായത് എസ് ആണ് അതിന്റെ വാല്യൂ. നോക്കിയോ എല്ലാവരും? അപ്പൊ എന്താ പറയുക ഔട്ട്‌ലുക്ക് അതായത് വെതർ ഔട്ട്‌ലുക്ക് ആണെങ്കിൽ ആ പർട്ടിക്കുലർ പേഴ്സൺ എന്താക്കാൻ പറ്റുക? കളിക്കാൻ പറ്റും. അപ്പൊ അതിന്റെ\n\n---\n\n[Chunk 4 | File: CHUNK3]\nAttendance roll number one. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten. Eleven. Twelve. Thirteen. Fourteen. Fifteen. Sixteen. Seventeen. Eighteen. Nineteen. Twenty. Twenty-one. Twenty-two. Twenty-three. Twenty-four. Twenty-five. Twenty-six. Twenty-seven. Twenty-eight. Twenty-nine. Thirty. Thirty-one. Thirty-two. Thirty-three. Thirty-four. Thirty-five. Thirty-six. Thirty-seven. Thirty-eight. Thirty-nine. Forty. Forty-one. Forty-two. Forty-three. Forty-four. Forty-five. Forty-six. Forty-seven. Forty-eight. Forty-nine. Fifty. Fifty-one. Fifty-two. Fifty-three. Fifty-four. Fifty-five. Fifty-six. Fifty-seven. Fifty-eight. Fifty-nine. Sixty. Sixty-one. Sixty-two. Sixty-three. Sixty-four. Sixty-five. Sixty-six. Sixty-seven. Sixty-eight. Sixty-nine."
          },
          "test11": {
                    "classId": "test11",
                    "title": "System Diagnostics & Multilingual Voice Test",
                    "badge": "🤖 AI TUTOR SESSION",
                    "subject": "System Diagnostics",
                    "teacher": "Instructor",
                    "module": "Module 1: Pipeline & Voice Ingestion Verification",
                    "date": "Sep 27, 2026",
                    "duration": "10 min (1 chunk)",
                    "topics": [
                              "Audio Capture & Streaming Verification",
                              "Gemini Multilingual Speech-to-Text (Malayalam)",
                              "Automated Cloud Webhook Ingestion"
                    ],
                    "summary": "Diagnostic audio test verifying real-time microphone stream chunking, WebM media recording, and Malayalam transcription with Gemini 3.1 Flash Lite model.",
                    "keyPoints": [
                              "Verified browser Web Audio API & MediaRecorder encoding.",
                              "Malayalam voice segments successfully parsed into Malayalam text.",
                              "Automated n8n webhook sync confirmed."
                    ],
                    "concepts": [
                              "Real-time Audio Chunking",
                              "Bilingual Speech-to-Text Pipeline"
                    ],
                    "definitions": [],
                    "formulas": [],
                    "examples": [],
                    "teacherEmphasis": "Ensure audio sample rates are consistent across test runs.",
                    "mandatoryTasks": [
                              "Review transcript and complete upcoming test assignment."
                    ],
                    "qas": [
                              {
                                        "q": "Q1: What did the test11 diagnostic verify?",
                                        "a": "It verified the end-to-end recording pipeline from browser microphone through n8n webhook, Drive upload, and speech transcription."
                              }
                    ],
                    "actionItems": [
                              "Review verbatim audio transcript for test11.",
                              "Check Google Drive folder for test11 audio file."
                    ],
                    "sources": [
                              {
                                        "source_id": "ml-main",
                                        "title": "Ml_text",
                                        "subject": "Machine Learning",
                                        "active": "TRUE",
                                        "drive_file_id": "1uzD4Oc1ErNH0fxgPBGTNDh1E02s7ZESC",
                                        "description": "Main 80-page ML textbook",
                                        "priority": "1"
                              }
                    ],
                    "driveFolderUrl": "https://drive.google.com/drive/folders/123RR15HDo-g5vtK4177LhVYNXqb0QhFO?usp=drive_link",
                    "transcripts": [
                              {
                                        "seq": 1,
                                        "filename": "test11-chunk-0001.webm",
                                        "drive_file_id": "1l-HFM-IwSTlpyMFazsMvXsHSY74qG-E-",
                                        "created_at": "2026-09-27T07:13:37.562Z",
                                        "text": "ഓക്കേ അതാണ് രണ്ടാമത്തെ ടെസ്റ്റ്. പിന്നെ ലാപിൽ ക്രോമിൽ. ഇനി അപ്പർ ഫോക്സ് ചെയ്തിട്ടുണ്ട്. ദാറ്റ്സ് ഓൾ ആൻഡ് അടുത്ത അസൈൻമെന്റ് രണ്ടാ��ത്തെ വെയ്‌ക്കുക ഒക്ടോബർ രണ്ടിന്.",
                                        "model": "gemini-3.1-flash-lite"
                              }
                    ],
                    "fullTranscript": "[Chunk 1 | File: test11-chunk-0001.webm]\nഓക്കേ അതാണ് രണ്ടാമത്തെ ടെസ്റ്റ്. പിന്നെ ലാപിൽ ക്രോമിൽ. ഇനി അപ്പർ ഫോക്സ് ചെയ്തിട്ടുണ്ട്. ദാറ്റ്സ് ഓൾ ആൻഡ് അടുത്ത അസൈൻമെന്റ് രണ്ടാ��ത്തെ വെയ്‌ക്കുക ഒക്ടോബർ രണ്ടിന്."
          },
          "Fast api": {
                    "classId": "Fast api",
                    "title": "FastAPI Backend Architecture & Webhook Services",
                    "badge": "🤖 AI TUTOR SESSION",
                    "subject": "FastAPI Backend",
                    "teacher": "Instructor",
                    "module": "Module 1: High-Performance Python Web Services",
                    "date": "Sep 27, 2026",
                    "duration": "~15 min (Finalized)",
                    "topics": [
                              "FastAPI Framework Core Principles",
                              "Asynchronous Request Processing",
                              "Webhook Ingestion & Validation"
                    ],
                    "summary": "Session reviewing FastAPI backend service configuration, webhook endpoints, and integration with lecture recording pipelines.",
                    "keyPoints": [
                              "High performance asynchronous API design with Pydantic typing.",
                              "Webhook routing for live streaming lecture audio."
                    ],
                    "concepts": [
                              "FastAPI Routing",
                              "Asynchronous Handlers"
                    ],
                    "definitions": [],
                    "formulas": [],
                    "examples": [],
                    "teacherEmphasis": "Use non-blocking async routes for file streaming.",
                    "mandatoryTasks": [
                              "Verify webhook payload schema compatibility."
                    ],
                    "qas": [
                              {
                                        "q": "Q1: Why is FastAPI used for webhook handling?",
                                        "a": "FastAPI delivers high-throughput async processing and native JSON validation via Pydantic."
                              }
                    ],
                    "actionItems": [
                              "Review API logs in server console."
                    ],
                    "sources": [],
                    "driveFolderUrl": "https://drive.google.com/drive/folders/123RR15HDo-g5vtK4177LhVYNXqb0QhFO?usp=drive_link",
                    "transcripts": [],
                    "fullTranscript": "FastAPI backend session finalized."
          }
};
        }
