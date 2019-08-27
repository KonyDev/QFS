#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UISwitch_symbols(JSContext*);
@protocol UISwitchInstanceExports<JSExport, NSCodingInstanceExports_>
@property (getter=isOn,nonatomic) BOOL on;
@property (nonatomic,strong) UIImage * offImage;
@property (nonatomic,strong) UIColor * tintColor;
@property (nonatomic,strong) UIColor * thumbTintColor;
@property (nonatomic,strong) UIImage * onImage;
@property (nonatomic,strong) UIColor * onTintColor;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(void) setOn: (BOOL) on animated: (BOOL) animated ;
JSExportAs(initWithFrame,
-(id) jsinitWithFrame: (CGRect) frame );
@end
@protocol UISwitchClassExports<JSExport, NSCodingClassExports_>
@end
#pragma clang diagnostic pop