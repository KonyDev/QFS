#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UILexicon_symbols(JSContext*);
@protocol UILexiconInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly,nonatomic) NSArray * entries;
@end
@protocol UILexiconClassExports<JSExport, NSCopyingClassExports_>
@end
@protocol UILexiconEntryInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly,nonatomic) NSString * documentText;
@property (readonly,nonatomic) NSString * userInput;
@end
@protocol UILexiconEntryClassExports<JSExport, NSCopyingClassExports_>
@end
#pragma clang diagnostic pop