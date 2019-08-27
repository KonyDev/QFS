#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITextChecker_symbols(JSContext*);
@protocol UITextCheckerInstanceExports<JSExport>
@property (nonatomic,strong) NSArray * ignoredWords;
-(NSArray *) guessesForWordRange: (NSRange) range inString: (NSString *) string language: (NSString *) language ;
-(NSRange) rangeOfMisspelledWordInString: (NSString *) stringToCheck range: (NSRange) range startingAt: (NSInteger) startingOffset wrap: (BOOL) wrapFlag language: (NSString *) language ;
-(NSArray *) completionsForPartialWordRange: (NSRange) range inString: (NSString *) string language: (NSString *) language ;
-(void) ignoreWord: (NSString *) wordToIgnore ;
@end
@protocol UITextCheckerClassExports<JSExport>
+(void) learnWord: (NSString *) word ;
+(NSArray *) availableLanguages;
+(void) unlearnWord: (NSString *) word ;
+(BOOL) hasLearnedWord: (NSString *) word ;
@end
#pragma clang diagnostic pop