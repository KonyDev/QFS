#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIReferenceLibraryViewController_symbols(JSContext*);
@protocol UIReferenceLibraryViewControllerInstanceExports<JSExport>
JSExportAs(initWithTerm,
-(id) jsinitWithTerm: (NSString *) term );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
@end
@protocol UIReferenceLibraryViewControllerClassExports<JSExport>
+(BOOL) dictionaryHasDefinitionForTerm: (NSString *) term ;
@end
#pragma clang diagnostic pop