#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPopoverSupport_symbols(JSContext*);
@protocol UIViewControllerUIPopoverControllerCategoryInstanceExports<JSExport>
@property (readwrite,nonatomic) CGSize contentSizeForViewInPopover;
@property (getter=isModalInPopover,readwrite,nonatomic) BOOL modalInPopover;
@end
@protocol UIViewControllerUIPopoverControllerCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop