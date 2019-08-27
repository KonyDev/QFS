#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UINibLoading_symbols(JSContext*);
@protocol NSBundleUINibLoadingAdditionsCategoryInstanceExports<JSExport>
-(NSArray *) loadNibNamed: (NSString *) name owner: (id) owner options: (NSDictionary *) options ;
@end
@protocol NSBundleUINibLoadingAdditionsCategoryClassExports<JSExport>
@end
@protocol NSObjectUINibLoadingAdditionsCategoryInstanceExports<JSExport>
-(void) awakeFromNib;
-(void) prepareForInterfaceBuilder;
@end
@protocol NSObjectUINibLoadingAdditionsCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop