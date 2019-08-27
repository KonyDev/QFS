#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPrintPaper_symbols(JSContext*);
@protocol UIPrintPaperInstanceExports<JSExport>
@property (readonly) CGSize paperSize;
@property (readonly) CGRect printableRect;
@end
@protocol UIPrintPaperClassExports<JSExport>
+(UIPrintPaper *) bestPaperForPageSize: (CGSize) contentSize withPapersFromArray: (NSArray *) paperList ;
@end
@protocol UIPrintPaperDeprecated_NonfunctionalCategoryInstanceExports<JSExport>
-(CGRect) printRect;
@end
@protocol UIPrintPaperDeprecated_NonfunctionalCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop