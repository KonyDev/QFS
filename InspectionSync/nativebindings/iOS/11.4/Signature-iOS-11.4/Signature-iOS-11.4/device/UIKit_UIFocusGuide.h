#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIFocusGuide_symbols(JSContext*);
@protocol UIFocusGuideInstanceExports<JSExport>
@property (getter=isEnabled,nonatomic) BOOL enabled;
@property (copy,nonatomic) NSArray * preferredFocusEnvironments;
@property (nonatomic,weak) UIView * preferredFocusedView;
@end
@protocol UIFocusGuideClassExports<JSExport>
@end
#pragma clang diagnostic pop