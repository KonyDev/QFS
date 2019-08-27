#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UISlider_symbols(JSContext*);
@protocol UISliderInstanceExports<JSExport, NSCodingInstanceExports_>
@property (readonly,nonatomic) UIImage * currentMinimumTrackImage;
@property (nonatomic) float maximumValue;
@property (getter=isContinuous,nonatomic) BOOL continuous;
@property (nonatomic,strong) UIImage * maximumValueImage;
@property (nonatomic) float value;
@property (nonatomic,strong) UIImage * minimumValueImage;
@property (readonly,nonatomic) UIImage * currentMaximumTrackImage;
@property (nonatomic,strong) UIColor * thumbTintColor;
@property (readonly,nonatomic) UIImage * currentThumbImage;
@property (nonatomic) float minimumValue;
@property (nonatomic,strong) UIColor * maximumTrackTintColor;
@property (nonatomic,strong) UIColor * minimumTrackTintColor;
-(CGRect) maximumValueImageRectForBounds: (CGRect) bounds ;
-(CGRect) minimumValueImageRectForBounds: (CGRect) bounds ;
-(void) setThumbImage: (UIImage *) image forState: (UIControlState) state ;
-(void) setMaximumTrackImage: (UIImage *) image forState: (UIControlState) state ;
-(UIImage *) minimumTrackImageForState: (UIControlState) state ;
-(CGRect) trackRectForBounds: (CGRect) bounds ;
-(void) setMinimumTrackImage: (UIImage *) image forState: (UIControlState) state ;
-(CGRect) thumbRectForBounds: (CGRect) bounds trackRect: (CGRect) rect value: (float) value ;
-(void) setValue: (float) value animated: (BOOL) animated ;
-(UIImage *) maximumTrackImageForState: (UIControlState) state ;
-(UIImage *) thumbImageForState: (UIControlState) state ;
@end
@protocol UISliderClassExports<JSExport, NSCodingClassExports_>
@end
#pragma clang diagnostic pop