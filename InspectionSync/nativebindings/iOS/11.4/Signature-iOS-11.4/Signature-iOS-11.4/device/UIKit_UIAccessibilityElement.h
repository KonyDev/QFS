#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIAccessibilityElement_symbols(JSContext*);
@protocol UIAccessibilityElementInstanceExports<JSExport, UIAccessibilityIdentificationInstanceExports_>
@property (assign,nonatomic) UIAccessibilityTraits accessibilityTraits;
@property (assign,nonatomic) BOOL isAccessibilityElement;
@property (nonatomic,strong) NSString * accessibilityHint;
@property (assign,nonatomic) CGRect accessibilityFrameInContainerSpace;
@property (nonatomic,strong) NSString * accessibilityLabel;
@property (nonatomic,strong) NSString * accessibilityValue;
@property (assign,nonatomic) id accessibilityContainer;
@property (assign,nonatomic) CGRect accessibilityFrame;
JSExportAs(initWithAccessibilityContainer,
-(id) jsinitWithAccessibilityContainer: (id) container );
@end
@protocol UIAccessibilityElementClassExports<JSExport, UIAccessibilityIdentificationClassExports_>
@end
#pragma clang diagnostic pop