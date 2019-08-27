#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPasteConfigurationSupporting_symbols(JSContext*);
@protocol UIPasteConfigurationSupportingInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (copy,nonatomic) UIPasteConfiguration * pasteConfiguration;
-(BOOL) canPasteItemProviders: (NSArray *) itemProviders ;
-(void) pasteItemProviders: (NSArray *) itemProviders ;
@end
@protocol UIPasteConfigurationSupportingClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop