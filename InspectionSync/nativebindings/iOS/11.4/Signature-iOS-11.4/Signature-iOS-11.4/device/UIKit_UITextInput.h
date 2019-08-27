#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITextInput_symbols(JSContext*);
@protocol UITextSelectionRectInstanceExports<JSExport>
@property (readonly,nonatomic) BOOL containsEnd;
@property (readonly,nonatomic) UITextWritingDirection writingDirection;
@property (readonly,nonatomic) BOOL containsStart;
@property (readonly,nonatomic) BOOL isVertical;
@property (readonly,nonatomic) CGRect rect;
@end
@protocol UITextSelectionRectClassExports<JSExport>
@end
@protocol UITextInputModeInstanceExports<JSExport, NSSecureCodingInstanceExports_>
@property (readonly,nonatomic,strong) NSString * primaryLanguage;
@end
@protocol UITextInputModeClassExports<JSExport, NSSecureCodingClassExports_>
+(UITextInputMode *) currentInputMode;
+(NSArray *) activeInputModes;
@end
@protocol UITextInputStringTokenizerInstanceExports<JSExport, UITextInputTokenizerInstanceExports_>
JSExportAs(initWithTextInput,
-(id) jsinitWithTextInput: (UIResponder *) textInput );
@end
@protocol UITextInputStringTokenizerClassExports<JSExport, UITextInputTokenizerClassExports_>
@end
@protocol UITextRangeInstanceExports<JSExport>
@property (readonly,nonatomic) UITextPosition * start;
@property (readonly,nonatomic) UITextPosition * end;
@property (getter=isEmpty,readonly,nonatomic) BOOL empty;
@end
@protocol UITextRangeClassExports<JSExport>
@end
@protocol UITextPositionInstanceExports<JSExport>
@end
@protocol UITextPositionClassExports<JSExport>
@end
@protocol UITextInputAssistantItemInstanceExports<JSExport>
@property (readwrite,copy,nonatomic) NSArray * trailingBarButtonGroups;
@property (assign,readwrite,nonatomic) BOOL allowsHidingShortcuts;
@property (readwrite,copy,nonatomic) NSArray * leadingBarButtonGroups;
@end
@protocol UITextInputAssistantItemClassExports<JSExport>
@end
@protocol UIDictationPhraseInstanceExports<JSExport>
@property (readonly,nonatomic) NSString * text;
@property (readonly,nonatomic) NSArray * alternativeInterpretations;
@end
@protocol UIDictationPhraseClassExports<JSExport>
@end
@protocol UITextInputTokenizerInstanceExports_<JSExport, NSObjectInstanceExports_>
-(UITextPosition *) positionFromPosition: (UITextPosition *) position toBoundary: (UITextGranularity) granularity inDirection: (UITextDirection) direction ;
-(BOOL) isPosition: (UITextPosition *) position atBoundary: (UITextGranularity) granularity inDirection: (UITextDirection) direction ;
-(BOOL) isPosition: (UITextPosition *) position withinTextUnit: (UITextGranularity) granularity inDirection: (UITextDirection) direction ;
-(UITextRange *) rangeEnclosingPosition: (UITextPosition *) position withGranularity: (UITextGranularity) granularity inDirection: (UITextDirection) direction ;
@end
@protocol UITextInputTokenizerClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UITextInputInstanceExports_<JSExport, UIKeyInputInstanceExports_>
@property (readonly,nonatomic) __kindof UIView * textInputView;
@property (readonly,nonatomic) UITextRange * markedTextRange;
@property (readonly,nonatomic) id tokenizer;
@property (readonly,nonatomic) UITextPosition * endOfDocument;
@property (readonly,nonatomic) id insertDictationResultPlaceholder;
@property (readwrite,copy) UITextRange * selectedTextRange;
@property (readonly,nonatomic) UITextPosition * beginningOfDocument;
@property (nonatomic) UITextStorageDirection selectionAffinity;
@property (nonatomic,weak) id inputDelegate;
@property (copy,nonatomic) NSDictionary * markedTextStyle;
-(UITextPosition *) positionWithinRange: (UITextRange *) range farthestInDirection: (UITextLayoutDirection) direction ;
-(UITextRange *) characterRangeByExtendingPosition: (UITextPosition *) position inDirection: (UITextLayoutDirection) direction ;
-(UITextPosition *) closestPositionToPoint: (CGPoint) point withinRange: (UITextRange *) range ;
-(CGRect) caretRectForPosition: (UITextPosition *) position ;
-(BOOL) shouldChangeTextInRange: (UITextRange *) range replacementText: (NSString *) text ;
-(NSArray *) selectionRectsForRange: (UITextRange *) range ;
-(UITextPosition *) positionWithinRange: (UITextRange *) range atCharacterOffset: (NSInteger) offset ;
-(void) insertDictationResult: (NSArray *) dictationResult ;
-(void) updateFloatingCursorAtPoint: (CGPoint) point ;
-(UITextPosition *) positionFromPosition: (UITextPosition *) position inDirection: (UITextLayoutDirection) direction offset: (NSInteger) offset ;
-(void) endFloatingCursor;
-(void) dictationRecognitionFailed;
-(void) replaceRange: (UITextRange *) range withText: (NSString *) text ;
-(NSString *) textInRange: (UITextRange *) range ;
-(void) unmarkText;
-(NSInteger) offsetFromPosition: (UITextPosition *) from toPosition: (UITextPosition *) toPosition ;
-(UITextRange *) characterRangeAtPoint: (CGPoint) point ;
-(UITextRange *) textRangeFromPosition: (UITextPosition *) fromPosition toPosition: (UITextPosition *) toPosition ;
-(CGRect) frameForDictationResultPlaceholder: (id) placeholder ;
-(void) removeDictationResultPlaceholder: (id) placeholder willInsertResult: (BOOL) willInsertResult ;
-(void) dictationRecordingDidEnd;
-(NSDictionary *) textStylingAtPosition: (UITextPosition *) position inDirection: (UITextStorageDirection) direction ;
-(NSInteger) characterOffsetOfPosition: (UITextPosition *) position withinRange: (UITextRange *) range ;
-(UITextPosition *) closestPositionToPoint: (CGPoint) point ;
-(UITextWritingDirection) baseWritingDirectionForPosition: (UITextPosition *) position inDirection: (UITextStorageDirection) direction ;
-(void) setBaseWritingDirection: (UITextWritingDirection) writingDirection forRange: (UITextRange *) range ;
-(void) beginFloatingCursorAtPoint: (CGPoint) point ;
-(void) setMarkedText: (NSString *) markedText selectedRange: (NSRange) selectedRange ;
-(CGRect) firstRectForRange: (UITextRange *) range ;
-(UITextPosition *) positionFromPosition: (UITextPosition *) position offset: (NSInteger) offset ;
-(NSComparisonResult) comparePosition: (UITextPosition *) position toPosition: (UITextPosition *) other ;
@end
@protocol UITextInputClassExports_<JSExport, UIKeyInputClassExports_>
@end
@protocol UITextInputDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) textDidChange: (id) textInput ;
-(void) textWillChange: (id) textInput ;
-(void) selectionWillChange: (id) textInput ;
-(void) selectionDidChange: (id) textInput ;
@end
@protocol UITextInputDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIKeyInputInstanceExports_<JSExport, UITextInputTraitsInstanceExports_>
@property (readonly,nonatomic) BOOL hasText;
-(void) deleteBackward;
-(void) insertText: (NSString *) text ;
@end
@protocol UIKeyInputClassExports_<JSExport, UITextInputTraitsClassExports_>
@end
#pragma clang diagnostic pop