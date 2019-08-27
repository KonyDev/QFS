#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDataSourceTranslating_symbols(JSContext*);
@protocol UIDataSourceTranslatingInstanceExports_<JSExport, NSObjectInstanceExports_>
-(NSInteger) presentationSectionIndexForDataSourceSectionIndex: (NSInteger) dataSourceSectionIndex ;
-(NSIndexPath *) dataSourceIndexPathForPresentationIndexPath: (NSIndexPath *) presentationIndexPath ;
JSExportAs(performUsingPresentationValues,
-(void) jsperformUsingPresentationValues: (JSValue *) actionsToTranslate );
-(NSIndexPath *) presentationIndexPathForDataSourceIndexPath: (NSIndexPath *) dataSourceIndexPath ;
-(NSInteger) dataSourceSectionIndexForPresentationSectionIndex: (NSInteger) presentationSectionIndex ;
@end
@protocol UIDataSourceTranslatingClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop